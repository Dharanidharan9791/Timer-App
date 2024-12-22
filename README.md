# Timer App 


## **Overview**
This is a React-based timer management application that allows users to add, edit, and delete timers. The application uses Redux for state management and persists timer data in localStorage to maintain state across page refreshes.

---

## **Tech Stack**
- **Frontend Framework**: React (with Vite for fast development)
- **Styling**: Tailwind CSS
- **Testing Framework**: Vitest (for unit and component testing)

---

1. **Features**

- Add, edit, and delete timers.

- Form validation with error snack bars for invalid submissions.

-  Timers are persisted in localStorage to prevent loss of data on page refresh.


   2. **Simultaneous Timers:**
      - Update the app to allow multiple timers to run simultaneously (currently, only one timer runs at a time).

   3. **Snack Bar Behavior:**
      - When a timer is completed:
        - A snack bar notification should display.
        - The notification sound should keep playing until the snack bar is dismissed.

   4. **Fix Snack Bar Console Error:**
      - Resolve the **console error** that occurs when the snack bar's **dismiss button** is clicked.

   5. **Extract Common Components:**
      - Extract the buttons in the **Add/Edit Timer Modal** as a **separate reusable component**.
      - Replace all instances of similar buttons in the app with this component.

   6. **Consolidate Modal Code:**
      - Refactor the code to use a **single modal component** for both adding and editing timers, eliminating duplication.

   7. **Validation Snack Bars:**
      - Currently, the **Submit button** is disabled when the form is invalid.
      - Show an **error snack bar** or notification when the form is submitted with invalid data.

   8. **Responsive Snack Bar Placement:**
      - For **desktop devices**: Display snack bars in the **top-right corner**.
      - For **mobile devices**: Display snack bars at the **bottom of the screen**.

   9. **Write Tests:**
      - Add **unit tests** for the `validation.ts` file to ensure all validation rules work as expected.
      - Write **component tests** for reusable components like `TimerItem` and `ModalButtons`.

   10. **Timer Persistence:**
       - Use **localStorage** to persist timers across page refreshes.

---

## **Installation**

1. Clone the repository:  
   ```bash
   git clone https://github.com/Dharanidharan9791/Timer-App.git
   ```

2. Install dependencies:  
   ```bash
   npm install
   ```

3. Start the development server:  
   ```bash
   npm run dev
   ```

4. Run tests:  
   ```bash
   npm vitest
   ```

---

## **Key Enhancements**


1. **Validation Snack Bars:**
   - Displays error messages when forms are submitted with invalid data.

- Responsive placement of snack bars for better UX on different devices..

2. **Timer Persistence:**
 - Timers are saved to localStorage whenever they are added, edited, or deleted.

- useTimerStore ensures timers are loaded from localStorage on app initialization.

3. **Simultaneous Timer:**
   - Simultaneous timers allows to run multiple timers at a time.

4. **Reusable Components:**
   - AddTimer and EditTimer are put together as a reusable component.

5. **Error Handling:**
   - Resolved the existing snack bar console error and provides meaningful feedback to users for invalid forms.



## **Contact**

For any questions or issues, feel free to contact the maintainer:

Email: dharanidharan3003@gmail..com

GitHub:  https://github.com/Dharanidharan9791