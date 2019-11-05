function upg1() {
	const d = new Date();
	const currentTime = d.getHours();

	if (currentTime >= 6 && currentTime <= 10) {
		console.log('god morgon')
	} else if (currentTime >= 10 && currentTime <= 18) {
		console.log('god dag');
	} else if (currentTime > 18 && currentTime < 22) {
		console.log('god kväll')
	} else {
		console.log('god natt')
	}

}

function upg2() {
	let screenWidth = window.innerWidth;
	let message = 'Du är på ';

	if (screenWidth > 1200) {
		message = message + 'stor ';
	} else if (screenWidth >= 768 && screenWidth <= 1200) {
		message = message + 'en medelstor ';
	} else if (screenWidth < 768) {
		message = message + 'liten ';
	}

	message = message + 'skärm';

	document.querySelector('#messageParagraph').textContent = message;
}

function upg3() {
	const   num1 = 2,
			num2 = 5,
			num3 = 8;
	
	if (num1 >= num2 && num1 >= num3) {
		console.log('Det största talet är: ' + num1)
	} else if (num2 >= num1 && num2 >= num3) {
		console.log('Det största talet är: ' + num2)
	} else {
		console.log('Det största talet är: ' + num3)
	}
}

function upg4() {
	function quicksort_checker(numbers) {
		let lastNum = 0;
		let statusSwitch = false;

		for (let i = 0; i < numbers.length; i++) {
			if (i > 0) {
				if (numbers[i] >= lastNum) {
					statusSwitch = true;
				} else {
					statusSwitch = false;
					break
				}
			}

			lastNum = numbers[i];
		}

		return statusSwitch;
	}

	function arrayMove(arr, fromIndex, toIndex) {
		let element = arr[fromIndex];
		arr.splice(fromIndex, 1);
		arr.splice(toIndex, 0, element);
	}

	function quicksort(numbers, pivot_index) {
		let pivot = numbers[pivot_index];

		const original_pivot_index = pivot_index;
		pivot_index = pivot_index-1;

		while (pivot_index >= 0) {
			if (numbers[pivot_index] >= pivot) {
				arrayMove(numbers, pivot_index, original_pivot_index+1)
			} else if (numbers[pivot_index] < pivot) {
				arrayMove(numbers, pivot_index, original_pivot_index-1)
			}

			pivot_index = pivot_index-1
		}

		return numbers
	}


	let nums = [7, 17, 35, 40, 130, 3, 4, 21, 38, 20];

	while (!quicksort_checker(nums)) {
		let piv = Math.floor(Math.random() * nums.length-1) + 1;
		nums = quicksort(nums, piv);
	}

	console.log(nums)
}

upg1();
upg2();
upg3();
upg4();
