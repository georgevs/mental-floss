#pragma once 

#include "defines.h"
#include <sstream>
#include <iomanip>

class Codec {
public:
  string serialize(TreeNode* root) {
    if (!root) return "";
    node_t nodes[10000];
    unsigned int count = 0;
    serialize(root, nodes, count);
    ostringstream oss;
    for (unsigned int index = 0; index < count; ++index) {
      const auto& node = nodes[index];
      oss << left << setw(6) << node.val << setw(6) << node.left << setw(6) << node.right;
    }
    return oss.str();
  }

  TreeNode* deserialize(string data) {
    if (data.empty()) return nullptr;
    return deserialize(data.c_str(), 0);
  }

private:
  struct node_t { int val; unsigned int left, right; };

  unsigned int serialize(TreeNode* root, node_t nodes[], unsigned int& count) {
    auto index = count++;
    auto& node = nodes[index];
    node.val = root->val;
    node.left = root->left ? serialize(root->left, nodes, count) : 0;
    node.right = root->right ? serialize(root->right, nodes, count) : 0;
    return index;
  }

  TreeNode* deserialize(const char* data, unsigned int index) {
    const char* ptr = data + (index * 18);
    const auto val = strtol(ptr, nullptr, 10);
    const auto leftIndex = strtoul(ptr + 6, nullptr, 10);
    const auto rightIndex = strtoul(ptr + 12, nullptr, 10);
    auto* node = new TreeNode(val);
    node->left = leftIndex ? deserialize(data, leftIndex) : nullptr;
    node->right = rightIndex ? deserialize(data, rightIndex) : nullptr;
    return node;
  }
};
