// bool visited[41][41][2000] = {};
// bool possiblyEquals(string &s1, string &s2, int i = 0, int j = 0, int diff = 0) {
//     auto processDigits = [&](const string &s, int &p, int sign) {
//         for (int val = 0; p < s.size() && isdigit(s[p]);) {
//             val = val * 10 + (s[p++] - '0');
//             if (possiblyEquals(s1, s2, i, j, diff + val * sign))
//                 return true;
//         }
//         return false;
//     };
//     if (i == s1.size() && j == s2.size())
//         return diff == 0;
//     if (!visited[i][j][1000 + diff]) {
//         visited[i][j][1000 + diff] = true;
//         if (i < s1.size() && isdigit(s1[i]))
//             return processDigits(s1, i, -1);
//         if (j < s2.size() && isdigit(s2[j]))
//             return processDigits(s2, j, 1);
//         if (diff > 0)
//             return i < s1.size() && possiblyEquals(s1, s2, i + 1, j, diff - 1);
//         if (diff < 0)
//             return j < s2.size() && possiblyEquals(s1, s2, i, j + 1, diff + 1);
//         return i < s1.size() && j < s2.size() && s1[i] == s2[j] && possiblyEquals(s1, s2, i + 1, j + 1, diff);
//     }
//     return false;
// }   




bool visited[41][41][2000] = {};

const possiblyEquals = (s1, s2, i = 0, j = 0, diff = 0) => {
    const processDigits = (s, int &p, int sign) {
        for (int val = 0; p < s.size() && isdigit(s[p]);) {
            val = val * 10 + (s[p++] - '0');
            if (possiblyEquals(s1, s2, i, j, diff + val * sign))
                return true;
        }
        return false;
    };
    if (i == s1.size() && j == s2.size())
        return diff == 0;
    if (!visited[i][j][1000 + diff]) {
        visited[i][j][1000 + diff] = true;
        if (i < s1.size() && isdigit(s1[i]))
            return processDigits(s1, i, -1);
        if (j < s2.size() && isdigit(s2[j]))
            return processDigits(s2, j, 1);
        if (diff > 0)
            return i < s1.size() && possiblyEquals(s1, s2, i + 1, j, diff - 1);
        if (diff < 0)
            return j < s2.size() && possiblyEquals(s1, s2, i, j + 1, diff + 1);
        return i < s1.size() && j < s2.size() && s1[i] == s2[j] && possiblyEquals(s1, s2, i + 1, j + 1, diff);
    }
    return false;
}   


module.exports = { possiblyEquals };
