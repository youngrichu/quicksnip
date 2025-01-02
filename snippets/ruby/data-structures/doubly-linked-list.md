---
title: Doubly Linked List
description: Implements a doubly linked list with node insertion and traversal.
author: ACR1209
tags: ruby,data structures,linked list,doubly linked list
---

```rb
class Node
  attr_accessor :data, :next, :prev

  def initialize(data)
    @data = data
    @next = nil
    @prev = nil
  end
end

class DoublyLinkedList
  def initialize
    @head = nil
    @tail = nil
  end

  def append(data)
    new_node = Node.new(data)
    if @head.nil?
      @head = new_node
      @tail = new_node
    else
      @tail.next = new_node
      new_node.prev = @tail
      @tail = new_node
    end
  end

  def prepend(data)
    new_node = Node.new(data)
    if @head.nil?
      @head = new_node
      @tail = new_node
    else
      new_node.next = @head
      @head.prev = new_node
      @head = new_node
    end
  end

  def display_forward
    current = @head
    while current
      print "#{current.data} <-> "
      current = current.next
    end
    puts "nil"
  end

  def display_backward
    current = @tail
    while current
      print "#{current.data} <-> "
      current = current.prev
    end
    puts "nil"
  end
end

# Usage:
dll = DoublyLinkedList.new
dll.append(1)
dll.append(2)
dll.append(3)
dll.display_forward # Output: 1 <-> 2 <-> 3 <-> nil
dll.display_backward # Output: 3 <-> 2 <-> 1 <-> nil
```