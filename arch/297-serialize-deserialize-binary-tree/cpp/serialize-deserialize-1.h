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
            (left.size() + right.size() > 0 ? " " : "") + 
            left + right;
  }

  TreeNode* deserialize(string data) {
    if (data.empty()) return nullptr;
    char* ptr = const_cast<char*>(data.c_str());
    const auto val = strtoul(ptr, &ptr, 10);
    const auto leftSize = strtoul(ptr + 1, &ptr, 10);
    const auto rightSize = strtoul(ptr + 1, &ptr, 10);
    auto* node = new TreeNode(val);
    if (leftSize + rightSize > 0) {
      node->left = leftSize > 0 ? deserialize(data.substr((ptr + 1) - data.c_str(), leftSize)) : nullptr;
      node->right = rightSize > 0 ? deserialize(data.substr((ptr + 1 + leftSize) - data.c_str(), rightSize)) : nullptr;
    }
    return node;
  }
};
