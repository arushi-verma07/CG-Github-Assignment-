# Git Branching: Hands-on Practice — Create, Switch, Commit & Push Assignments

---

### Assignment 1: Understanding Concepts

*Objective:* Check basic understanding of branching.

*Tasks:*
1. What is a *branch* in Git? Explain in your own words.
2. Why should we *not* work directly on the main branch?
3. Explain the road analogy of branching (main road vs side road).
4. What is the difference between git branch and git switch?

*Submission:* Written answers in your notebook.

---
Answer's:-

<img width="1080" height="1418" alt="image" src="https://github.com/user-attachments/assets/7357dde2-d1cc-46cf-a347-1e51a33496c6" />

---


### Assignment 2: Commands Identification

*Objective:* Identify the correct commands.

*Tasks:*
1. Write the command for the following actions:

| Action                              | Command |
|-------------------------------------|---------|
| List all branches                   |         |
| Create a new branch named feature-home |    |
| Switch to feature-home            |         |
| Create + Switch in one command      |         |
| Merge feature-home into main      |         |
| Delete feature-home after merge   |         |

2. Write both the *modern* and *older* command for:
   - Switching to a branch
   - Creating + switching to a new branch

*Submission:* Filled table + answers

---
Answer:-

<img width="1372" height="1600" alt="image" src="https://github.com/user-attachments/assets/c7cd4e72-25d7-42a6-9302-082a9cdf1671" />

---
### Assignment 3: Practical Branching Workflow

*Objective:* Perform the complete branching cycle.

*Tasks:*
1. Make sure you are on the main branch.
2. Create a new branch named feature-contact.
3. Create a file contact.txt and write your name + any message.
4. Stage and commit the file with a meaningful message.
5. Switch back to main.
6. Merge feature-contact into main.
7. Delete the feature-contact branch.
8. Verify using:
   - git branch
   - git log --oneline

*Submission:*  
- Screenshot of git branch (before and after)  
- Screenshot of git log --oneline  
- Screenshot showing contact.txt is present on main

---
Answer:-
<img width="428" height="428" alt="image" src="https://github.com/user-attachments/assets/90bcd7a5-b8a6-4773-94a8-2e83e2df6167" />

---

<img width="443" height="281" alt="image" src="https://github.com/user-attachments/assets/187ea686-34db-4db9-b43d-95089e2be099" />

---

<img width="396" height="257" alt="image" src="https://github.com/user-attachments/assets/dc2d59bc-d58a-4579-ad28-af6afdd10ac0" />

---
### Assignment 4: Conceptual + Error Handling

*Objective:* Understand rules and common mistakes.

*Tasks:*
1. What will happen if you try to delete a branch that is not yet merged?  
   Write the error and how to fix it.
2. Why should you always *commit* before switching branches?
3. Fill in the correct flow:


______ → Work → ______ → ______ → Switch to main → ______ → Delete branch


4. Explain the difference between:
   - git branch -d branch-name
   - git branch -D branch-name

*Submission:* Written answers

---
Answer:-

<img width="1080" height="1478" alt="image" src="https://github.com/user-attachments/assets/fc5d2863-1f38-4325-be97-e28a28f2a8ac" />

---
### Assignment 5: Complete Real Scenario

*Objective:* Apply branching in a realistic situation.

*Scenario:*  
You are working on a website project. Currently you are on the main branch. You need to add two new pages: *About* and *Services*.

*Tasks:*
1. Create a branch feature-about, add a file about.txt, commit it, merge it into main, and delete the branch.
2. Create another branch feature-services, add a file services.txt, commit it, merge it into main, and delete the branch.
3. After completing both, show:
   - Final list of branches (git branch)
   - Final commit history (git log --oneline)
4. Answer:
   - Why did we create two separate branches instead of doing both features on one branch?
   - What is the advantage of merging only after the feature is complete?

*Submission:*  
- Screenshots of both merges  
- Final git branch and git log --oneline  
- Written answers for the two questions

---
Answer:-
<img width="494" height="350" alt="image" src="https://github.com/user-attachments/assets/1e9add99-b3ae-440d-baed-381f6c381833" />

---

<img width="486" height="323" alt="image" src="https://github.com/user-attachments/assets/0aeed9e5-dc5f-4a69-8bfb-9e09353fa2fc" />

---
<img width="499" height="261" alt="image" src="https://github.com/user-attachments/assets/929079b1-de44-42b8-8eb6-f1a585c7a001" />

---

<img width="1600" height="1253" alt="image" src="https://github.com/user-attachments/assets/1a199ef8-676c-488c-b8ab-8332d9b774c8" />

---
