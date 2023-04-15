#!/usr/bin/perl

=head1 NAME

parse_data.pl - Parse leetcode case data format.

=head1 SYNOPSIS

parse_data.pl [file_path]

=head1 DESCRIPTION

Parse leetcode case data format, and print the generated sql insert statements on the console.
Takes input from a file or STDIN.

Suggested usage:

./parse_data.pl << EOF | mysql leetcode
Customers=
| id | name  |
| -- | ----- |
| 1  | Joe   |
| 2  | Henry |
| 3  | Sam   |
| 4  | Max   |
Orders=
| id | customerId |
| -- | ---------- |
| 1  | 3          |
| 2  | 1          |
EOF

=cut


sub main {
  my ($file_path) = @_;
  iter_file_lines($file_path, process_data_line(emit_insert_values_sql));
}

sub iter_file_lines {
  my ($file_path, $process_line) = @_;
  my $fh;
  if ($file_path) { open($fh, "<", $file_path) or die "Can't open file: $!" }
  else { $fh = \*STDIN }

  while (my $line = <$fh>) {
    &$process_line($line);
  }
  
  close($fh) if $file_path;
}

sub process_data_line {
  my ($emit_sql) = @_;
  my $table_name_pattern = qr/^(\w+)=/; 
  my $column_pattern = qr/\|\s*(.*?)\s*(?=\|)/;
  my $table_name = '';
  my @columns = ();
  my $separator = 0;

  return sub {
    my ($line) = @_;
    if (!$table_name) {
      $table_name = $1 if $line =~ $table_name_pattern;
    }
    elsif (my @data = match_pattern($line, $column_pattern)) {
      if (!@columns) { @columns = @data }
      elsif (!$separator) { $separator = scalar @data }
      else {
        &$emit_sql($table_name, \@columns, \@data);
      }
    }
    else {
      $table_name = $line =~ $table_name_pattern ? $1 : '';
      @columns = ();
      $separator = 0;
    }
  }
}

sub emit_insert_values_sql {
  my ($table_name, $columns, $data) = @_;
  my $columns_list = join(',', @$columns);
  my $values_list = join(',', map { "'$_'" } @$data );
  print "INSERT INTO $table_name($columns_list) VALUES($values_list);\n";
}

sub match_pattern {
  my ($line, $pattern) = @_;
  my @matches;
  while ($line =~ /$pattern/g) {
    push @matches, $1;
  }
  return @matches;
}

main(@ARGV);
