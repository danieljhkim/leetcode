# Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


""" ordered 
         1
     2       3
   4   5   6   7
  
"""

""" left is smaller and right is bigger
         4
     2       6
   1   3   5   7
  
"""


def inorderTraversal(root):
    # tranverses nodes in non-decreasing order
    # 4 2 5 1 6 3 7
    # 1 2 3 4 5 6 7
    if root:
        inorderTraversal(root.left)
        print(root.val)
        inorderTraversal(root.right)


def preorderTraversal(root):
    # used to create a copy/mirror of the tree
    # used to get prefix expressions of an expression tree
    # 1 2 4 5 3 6 7
    if root:
        print(root.val)
        preorderTraversal(root.left)
        preorderTraversal(root.right)


def postorderTraversal(root):
    # used to delete a tree
    # useful for getting postrix expression
    # 4 5 2 6 7 3 1
    if root:
        postorderTraversal(root.left)
        postorderTraversal(root.right)
        print(root.val)


def BFS(root):
    if root is None:
        return

    queue = [root]
    while queue:
        node = queue.pop(0)
        # process(node)
        if node.left is not None:
            queue.append(node.left)
        if node.right is not None:
            queue.append(node.right)
