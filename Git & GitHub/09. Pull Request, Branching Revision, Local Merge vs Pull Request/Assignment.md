<img width="948" height="1280" alt="image" src="https://github.com/user-attachments/assets/3ff94d26-a97b-42a8-8c95-ccf211937c7c" />
# Assignments

---

### Assignment 1: Branching Commands & Naming

**Objective:** Revise branching commands and naming conventions.

**Tasks:**
1. Write the modern and older command for the following:

| Action                         | Modern Command | Older Command |
|--------------------------------|----------------|---------------|
| Switch to a branch             |                |               |
| Create + Switch to new branch  |                |               |
| Merge a feature branch         |                |               |
| Delete a merged branch         |                |               |

2. Write 4 **good** branch names and 4 **bad** branch names.
3. What is the recommended naming convention for feature branches?

**Submission:** Written answers

---
Answer:-
<img width="972" height="1280" alt="image" src="https://github.com/user-attachments/assets/c4476cbc-4913-4e52-be38-cdd7dfe155b5" />

---
### Assignment 2: Local Merge vs Pull Request

**Objective:** Understand the difference between the two methods.

**Tasks:**
1. Create a comparison table between **Local Merge** and **GitHub Pull Request** (at least 5 points).
2. When should you use Local Merge?
3. When should you use a Pull Request?
4. Why is Pull Request preferred in team/professional projects?

**Submission:** Written answers

---
Answer:-
<img width="948" height="1280" alt="image" src="https://github.com/user-attachments/assets/0f59c2e1-059d-435f-be9b-5df9cc5fccaf" />

---

### Assignment 3: Practical Local Merge

**Objective:** Practice the complete local merge workflow.

**Tasks:**
1. Make sure you are on `main`.
2. Create a branch named `feature/about-page`.
3. Create a file `about.txt` and add some content.
4. Stage and commit with a meaningful message.
5. Switch to `main` and merge the branch.
6. Delete the feature branch.
7. Verify with `git branch` and `git log --oneline`.

**Submission:**  
- Screenshot of `git branch` (final)  
- Screenshot of `git log --oneline`  
- Screenshot showing `about.txt` is present on main

---
Answer:-
<img width="502" height="398" alt="image" src="https://github.com/user-attachments/assets/41fd7f12-7ef3-4884-8ee9-f18654e6832d" />

---

<img width="503" height="290" alt="image" src="https://github.com/user-attachments/assets/bf005823-6632-4d23-8132-f110575b3119" />

---

<img width="557" height="561" alt="image" src="https://github.com/user-attachments/assets/198fe7b8-28c4-4990-adfc-85a94462e851" />

---

### Assignment 4:  Create & Merge Pull Request

**Objective:** Perform the professional Pull Request workflow.

**Tasks:**
1. Create a new branch `feature/services-page`.
2. Add a file `services.txt` with any content.
3. Commit the changes.
4. Push the branch using:
   ```bash
   git push -u origin feature/services-page
   ```
5. Go to GitHub and create a Pull Request.
6. Merge the Pull Request.
7. Delete the branch on GitHub.
8. Update your local main:
   ```bash
   git switch main
   git pull origin main
   git branch -d feature/services-page
   ```
**Submission:**  
- Screenshot of the created Pull Request  
- Screenshot after merging the PR  
- Screenshot of final `git log --oneline` on main

---
  Answer:-
   <img width="646" height="391" alt="image" src="https://github.com/user-attachments/assets/b6270b00-3a29-4433-a07a-66d1632aa513" />

   ---

   <img width="456" height="532" alt="image" src="https://github.com/user-attachments/assets/ea44952e-9548-4a08-8d94-286e207a8cab" />

   ---

   <img width="430" height="479" alt="image" src="https://github.com/user-attachments/assets/582da7bb-8aa5-4b38-b50c-384384dbabeb" />

   ---
### Assignment 5: Complete Understanding + Reflection

**Objective:** Test deep understanding of Day 9 concepts.

**Tasks:**
1. Write the complete **Local Merge** workflow (step-by-step commands).
2. Write the complete **Pull Request** workflow (step-by-step).
3. Answer the following:
   - Why should we always run `git pull` on main before creating a new feature branch?
   - What happens if you merge a PR on GitHub but forget to run `git pull` locally?
   - Why should feature branches be deleted after merging?
4. Write 4 key takeaways from Day 9.

**Submission:** Written answers

---
Answer:-

<img width="977" height="1280" alt="image" src="https://github.com/user-attachments/assets/8e0f7610-d55f-4926-942c-f75eafba12b8" />

---

<img width="988" height="1280" alt="image" src="https://github.com/user-attachments/assets/a9ca6caf-367f-480f-b76c-a0f82106e04a" />

---
