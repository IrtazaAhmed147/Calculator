let display = document.getElementById("input");

let button = document.querySelectorAll('.btn')

let btnArray = Array.from(button)


let string = '';


btnArray.forEach(btn => {
    btn.addEventListener('click', (e) => {

        let value = e.target.innerHTML
   

        if (value === 'AC') {
            string = '';
            display.value = string;

        } else if (value === '=') {
           
            try {

                string = eval(string).toString()
                display.value = string;
            } catch (err) {
                display.value = "Error";

            }

        } else if (value === "Del") {
            string = string.substring(0, string.length - 1)
           
            display.value = string
        }
        else {

            // string += value;
            string = string + value;

            display.value = string;
        }


    })
}

)

