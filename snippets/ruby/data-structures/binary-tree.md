---
title: Binary Tree
description: Implements a basic binary tree with in-order traversal.
author: ACR1209
tags: data structures,binary tree
---

```rb
class TreeNode
  attr_accessor :data, :left, :right

  def initialize(data)
      @data = data
      @left = nil
      @right = nil
  end
end

class BinaryTree
  attr_accessor :root

  def initialize(root_data)
      @root = TreeNode.new(root_data)
  end

  def in_order_traversal(node = @root, result = [])
      return result unless node

      in_order_traversal(node.left, result)
      result << node.data
      in_order_traversal(node.right, result)
  end
end

# Usage:
tree = BinaryTree.new(10)
tree.root.left = TreeNode.new(5)
tree.root.right = TreeNode.new(15)
tree.root.left.left = TreeNode.new(3)

print tree.in_order_traversal # Output: [3, 5, 10, 15]
```