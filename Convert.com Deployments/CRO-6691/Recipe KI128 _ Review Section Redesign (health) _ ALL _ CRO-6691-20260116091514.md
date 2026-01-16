# Recipe KI128 | Review Section Redesign (health) | ALL | CRO-6691

| Recipe Link | Private ([https://app.clickup.com/t/20651070/CRO-6691](https://app.clickup.com/t/20651070/CRO-6691)) |
| ---| --- |
| Figma Link | [https://www.figma.com/proto/jwFnfC1lwVslkYjY0Fi2dE/Recipe-KI128-%7C-Review-Section-Redesign--health--%7C-ALL-%7C-CRO-6691?node-id=1-58&p=f&t=ODwopg6rQqCeR0Ag-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1](https://www.figma.com/proto/jwFnfC1lwVslkYjY0Fi2dE/Recipe-KI128-%7C-Review-Section-Redesign--health--%7C-ALL-%7C-CRO-6691?node-id=1-58&p=f&t=ODwopg6rQqCeR0Ag-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1) |
| Figma Dev Link | [https://www.figma.com/design/jwFnfC1lwVslkYjY0Fi2dE/Recipe-KI128-%7C-Review-Section-Redesign--health--%7C-ALL-%7C-CRO-6691?node-id=0-1&t=o5NR16Hz3HFR6Afl-1](https://www.figma.com/design/jwFnfC1lwVslkYjY0Fi2dE/Recipe-KI128-%7C-Review-Section-Redesign--health--%7C-ALL-%7C-CRO-6691?node-id=0-1&t=o5NR16Hz3HFR6Afl-1) |
| Build Page On | [https://landings.oneplan.co.za/Landings/health-insurance-s](https://landings.oneplan.co.za/Landings/health-insurance-s) |
| Alternative Templates | None |
| Variant Name | Redesign of Review Section |
| Primary Conversion Action |  |
| Deploys |  |

### Background
* * *

By refreshing the design of the review section on our Health short LP, it would help users understand the social proof and USPs of OnePlan, increasing user interest and thereby increase the Create Quote Health Step 2 (GA4) rate.

### Summary of Changes
* * *

1. The review section carousel will be fully redesigned.
###   

### UX/Ui
* * *

1. The current review section should no longer display in its current format
    1. A heading should display above the reviews saying:
        1. See why South Africans trust Oneplan for simple, affordable health cover that truly delivers.
2. Carousel
    1. The content and layout for each review card should stay the same
        1. A left and right arrow should display to the left and the right of the carousel
            1. When the carousel is clicked, it should move one frame left or right based on the arrow that was clicked.
        2. The carousel should **not** autoscroll
        3. The carousel should be on an infinite loop
3. Desktop
    1. Reviews should sit in a 3-column layout
4. Mobile
    1. The reviews should sit in a single-column layout

**Design**

1. Background
    1. The section background colour should be #F8F8F8
        1. This should take up the full section
2. Carousel cards
    1. The design for the carousel cards should not be updated
    2. There should be a +- 34px margin between cards
3. Left - Right arrow buttons
    1. The arrows should be +-30px in width and height
    2. The buttons should be round
    3. The background colour should be #40AEE1
    4. Within the carousel, a left or right chevron should display
        1. The chevron colour should be #fff
    5. The left arrow should sit to the left of the carousel cards, the right arrow should sit to the right of the carousel cards
    6. The buttons should sit vertically centred when compared to carousel cards

### Change Checklist
* * *

1. What sections need to be updated
    1. The review section will be redeisgned
2. Does the remainder of the page need to be updated?
    1. No
3. Do font sizes, colours, and families need to be updated?
    1. Only in the new section
4. What device widths need to be used
    1. Mobile and desktop
5. Do the developers need more designs to illustrate what needs to be done clearly?
.

### Logic & Rules
* * *

### Test Analysis
* * *
🧪 **Test Page:** health-insurance-s Page
🎯 **Targeting Type:** Global JS
🌐 **Global JS Required:** ✅ Yes

🔧 **Implementation Details:**
*   The test will run **only** on the `health-insurance-s` page using Global JS targeting.
*   A new **review slider** will be created using **HTML, CSS, and JS**.
*   The slider will be inserted **after** the `#reviews` section using **JS** (`afterend`).
*   Slider styling and behavior will align with the existing page design.

### Test Case
* * *

[

crp.testmo.net

https://crp.testmo.net/repositories/14?group\_id=450

](https://crp.testmo.net/repositories/14?group_id=450)