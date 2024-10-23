# Front-end Developer Test Task

This is a solution to the [test task](https://drive.google.com/file/d/1Sd9rFBXe58pV8YzP2q1uKzkFDjgJZHPv/view) focused on creating a responsive HTML page based on the provided mockup.

## Overview

This project involves the creation of a responsive HTML page based on the provided mockup. The task requires the implementation of three responsive layouts (desktop, tablet, and mobile) and a popup that appears 5 seconds after the page loads. Below are details regarding the frameworks, libraries, and key decisions made during the development process.

### Task 

-  Create a responsive HTML page based on the [mockup](https://drive.google.com/file/d/1Sd9rFBXe58pV8YzP2q1uKzkFDjgJZHPv/view)
-  Ensure the layout fluidly adapts to various screen sizes: mobile, tablet, and desktop.
-  Implement a popup that displays after a 5-second delay upon page load.

## Technology Stack

- **Semantic HTML5**: Utilized for structuring content, enhancing accessibility, and improving SEO.
- **SASS**: Employed for efficient styling, allowing for better organization and scalability of stylesheets.
- **Vanilla JavaScript**: Chosen to handle user interactions, as the task can be completed effectively without frameworks, given its simplicity and lack of routing or server-side features.


## Frameworks  and Libraries

- **SASS**:
  - **Purpose**: A CSS preprocessor that allows for more dynamic and maintainable stylesheets.
  - **Benefits**: Enables the use of variables, nested rules, and mixins, which streamline the styling process and improve organization. This choice allows for cleaner code and better scalability as the project grows.

- **Vanilla JavaScript**:
  - **Purpose**: The core JavaScript language without any frameworks or libraries.
  - **Benefit**: Utilized for its simplicity and effectiveness in handling user interactions. Choosing Vanilla JavaScript keeps the project lightweight, avoiding unnecessary dependencies for a straightforward task that does not require complex features like routing.

- **Google Fonts**: 
  - **Purpose**: Selected to enhance typography.
  - **Benefit**: Provides a wide selection of web-safe fonts that are easy to integrate and optimize for performance.

- **SVG Repo**: 
  - **Purpose**: To source scalable vector icons for UI elements.
  - **Benefit**: Offers a variety of customizable icons that align with the mockup design, avoiding the need for image sourcing.


## Key Decisions and Optimizations

1. **Responsive Designs**
  - Adopted a mobile-first approach to ensure a seamless user experience across all devices.
  - Implemented media queries to facilitate fluid layout adjustments for desktop, tablet, and mobile views, promoting maintainability and reducing redundancy in stylesheets.

2. **Popup Implementation**: 
   - The popup is designed to appear after a 5-second delay using JavaScript's setTimeout function, allowing users to engage with the page before it interrupts their experience
   - Included a close button for easy dismissal, enhancing user experience by not forcing interaction with the popup.

3. **Performance Optimization**: 
   - Utilized the `defer` attribute for script loading, preventing render-blocking and ensuring smoother page interactions.

4. **Mobile Tab Navigation Feature**
  - Implemented a tab feature that allows users to navigate through interactive elements using keyboard shortcuts. This feature enhances accessibility and ensures usability on mobile devices.


## Mockup Link

[Access the mockup here](https://drive.google.com/file/d/1Sd9rFBXe58pV8YzP2q1uKzkFDjgJZHPv/view?usp=drive_link)


## Project Link

[View the Responsive Test Page](https://ralphvirtucio.github.io/fed-test-task/)


## Continued Development

- Explore the addition of animations to the popup for a more engaging user experience.
- Investigate dynamic content rendering by creating a data.json file and leveraging the `fetch` API for content loading.