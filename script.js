let display = document.getElementById("input");

let button = document.querySelectorAll('.btn')

let btnArray = Array.from(button)


let string = '';


btnArray.forEach(btn => {
    btn.addEventListener('click', (e) => {

        let value = e.target.innerHTML


        if (value === 'AC') {
            string = '';
            display.innerHTML = string;


        } else if (value === '=') {

            try {

                string = eval(string).toString()
                display.innerHTML = string;

            } catch (err) {
                display.innerHTML = "Error";

            }

        } else if (value === "Del") {
            string = string.substring(0, string.length - 1)

            display.innerHTML = string


        }
        else {

            // string += value;
            string = string + value;

            display.innerHTML = string;

        }


    })
}

)

