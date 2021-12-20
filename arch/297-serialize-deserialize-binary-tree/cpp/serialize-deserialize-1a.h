#pragma once 

#include "defines.h"

class Codec {
public:
  string serialize(TreeNode* root) {
    if (!root) return "";
    const auto val = to_string(root->val);
    const auto left = serialize(root->left);
    const auto right = serialize(root->right);
    return val + " " + to_string(left.size()) + " " + to_string(right.size()) +
            (left.size() ? " " : "") + left + 
            (right.size() ? " " : "") + right;
  }

  TreeNode* deserialize(string data) {
    return deserialize(const_cast<char*>(data.c_str()));
  }

  TreeNode* deserialize(char* data) {
    if (*data == 0) return nullptr;
    char* ptr = data;
    const auto val = strtoul(ptr, &ptr, 10);
    const auto leftSize = strtoul(ptr + 1, &ptr, 10);
    const auto rightSize = strtoul(ptr + 1, &ptr, 10);
    auto* node = new TreeNode(val);
    if (leftSize + rightSize > 0) {
      node->left = leftSize > 0 ? deserialize(ptr + 1) : nullptr;
      node->right = rightSize > 0 ? deserialize(ptr + 1 + leftSize) : nullptr;
    }
    return node;
  }
};
