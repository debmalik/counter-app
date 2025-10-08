\*\*

# Counter-App

## Description:

- An interactive counter application that includes features, simple plus (+) and minus (–) buttons that allow users to increase or decrease a display counter value in real time.

## Tech-Stack:

- NextJS(AppRouter)
- TailwindCss With ShadCn (Tailwind UI Library)
- Customizing themes using Next theme
- Lucide Icon - For Icons

## Features:

- Three types of counter features
- Easy navigation
- Clean UI and a UX
- Available in dark mode

## Elaboration:

- In the Counter application, there are 3 pages: Basic, Intermediate, and Expert. Each page serves as a different counter level
- The basic page will feature two buttons [(+), (-)] along with a counter value display. This basic page will serve as the homepage.
- The intermediate page will feature four buttons [(+) , (-) , (+10) , (-10)] along with a counter value information.
- The expert page will also have 4 buttons with disabled features [(+), (-), (+10), (-10)], and a counter value information.
- All three pages can be accessed through the NavBar; additionally, the buttons for dark and light mode is positioned on the right side of the navbar.
- In the component folder, I create three pages. Each page contains a card to organize the design. For the logic section, I utilize the upper part of the page.
- On all three Component pages, a single State is established, where 'count' serves as the name and 'setCount' functions as a setter function to monitor the counter value information.
- For the Basic, Intermediate, and Expert counter application, pressing the button will activate the onclick event. When this event is triggered, it calls the associated function. Within these functions, the setter function [setCount] is instructed to modify [either increase or decrease] the count value as needed.
- For Basic and Intermediate counter applications, there are no restrictions on increasing or decreasing their values. However, for the Expert counter application, the value cannot go below zero/-1 or exceed +100. The buttons are disabled accordingly; for instance, when the counter value is 0, the (-) and (-10) buttons will be inactive. Conversely, when the counter value reaches 100, the (+) and (+10) buttons will be disabled.
