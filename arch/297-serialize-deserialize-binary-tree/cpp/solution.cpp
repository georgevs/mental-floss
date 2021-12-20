// #include "serialize-deserialize-1.h"   // 10000 - 474; 56 ms, faster than 55.03%, 54 MB, less than 18.34%
// #include "serialize-deserialize-1a.h"  // 10000 - 442; 64 ms, faster than 45.91%, 43.7 MB, less than 21.55%
// #include "serialize-deserialize-2.h"  // 10000 - 491; 32 ms, faster than 99.26%, 31.9 MB, less than 52.88%
#include "serialize-deserialize-2a.h"  // 10000 - 146;

#include <assert.h>
#include <chrono>
#include <iostream>
#include <memory>

TreeNode* test(TreeNode* root) {
  Codec ser, deser;
  return deser.deserialize(ser.serialize(root));
}

bool eq(const TreeNode* lhs, const TreeNode* rhs) {
  return (lhs == nullptr && rhs == nullptr) ||
          ( lhs != nullptr && rhs != nullptr && 
            lhs->val == rhs->val &&
            eq(lhs->left, rhs->left) && eq(lhs->right, rhs->right));
}

int main() {
  // auto root = shared_ptr<TreeNode> {};

  // auto root = make_shared<TreeNode>(1);

  auto root = make_shared<TreeNode>(1);
  root->left = new TreeNode(2);
  root->right = new TreeNode(3);
  root->right->left = new TreeNode(4);
  root->right->right = new TreeNode(5);


  cout << "[" + Codec().serialize(root.get()) << "]" << endl;

  auto ans = shared_ptr<TreeNode> { test(root.get()) };
  assert(eq(root.get(), ans.get()));

  const auto t = chrono::system_clock::now();
  for (int i = 0; i < 10000; ++i) {
    auto ans = shared_ptr<TreeNode> { test(root.get()) };
  }
  cout << chrono::duration_cast<chrono::milliseconds>(chrono::system_clock::now() - t).count() << endl;

  return 0;
}
