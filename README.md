# Currency-App
This is a full stack Project.in this app we can see the current price of any currency and convert the currency to a required currency and also we can preview the prices of the currencies at any date. only for study purpose app.
Flowbite UI/UX Library used for styling.
1.Install some packages in to server file using this command
     *npm install axios cors dotenv express nodemon.
2. Install some  packages into client file using this coomand
    this is tailwnid css framework
    *npm install -D tailwindcss
     npx tailwindcss init
3. After Install tailwind, open tailwind.config.js file and remove all the code and paste this
   /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

4. after that add the tailwind directives to your css .
    *open index.css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;  
   * paste this code above body tag  
5.Create your App
6. for crate sate import useStae hook