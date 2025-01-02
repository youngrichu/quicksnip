---
title: Singly Linked List
description: Implements a basic singly linked list with node insertion and traversal.
author: ACR1209
tags: data structures,linked list
---

```rb
class Node
  attr_accessor :data, :next

  def initialize(data)
      @data = data
      @next = nil
  end
end

class LinkedList
  def initialize
      @head = nil
  end

  def append(data)
      new_node = Node.new(data)
      if @head.nil?
          @head = new_node
      else
          current = @head
          current = current.next while current.next
          current.next = new_node
      end
  end

  def display
      current = @head
      while current
          print "#{current.data} -> "
          current = current.next
      end
      puts "nil"
  end
end

# Usage:
list = LinkedList.new
list.append(1)
list.append(2)
list.append(3)
list.display # Output: 1 -> 2 -> 3 -> nil
```