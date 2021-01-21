* Title: Book Your Dream
* Description:  Simple Cart app for booking hotels with payment step. 
* Author: Lukasz Modzelewski 
* React (router, context, ref, hooks), HTML, CSS (SCSS, BEM), RWD
* DEMO: https://lm-bookyourdream.herokuapp.com/
---

### How to run (dev mode)

In the project directory, you can run:

    yarn start

Runs the app in the development mode.

---

Features added:
* home page, footer with social links, page not found component
* fetching from mockAPI.io
* show specific error if fetch failed, show loading while loading data
* context for global data, all booking information stored in context as array of objects
* buttons to manipulate number of nights booked, trash button to delete position completely
* summary below with table and all booking info
* responsive web design (in progress)

---

Possible future improvements:
* payment route, form with validation
* skeleton components while loading (now only text)
* optimalization (useless re-renders because of using objects), refactor context
* skeleton components while loading


