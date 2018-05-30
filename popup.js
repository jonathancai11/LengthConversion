
// Event Listener for convert button:
document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('convertbutton').addEventListener("click", convert);
});

// Convert function:
function convert() {

	// Get input values
	var inputvalue = document.getElementById('inputvalue').value;
	var inputunit = document.getElementById('input').value;
	// Get input system
	if (inputunit == 'kilometer'|| inputunit == 'meter' || inputunit == 'decimeter' 
		|| inputunit == 'centimeter' || inputunit == 'millimeter') {
		var inputsys = 'metric';
	} else {
		var inputsys = 'imperial';
	}

	// Get output values
	var outputunit = document.getElementById('output').value;
	var outputvalue = inputvalue * 1
	// Get output system
	if (outputunit == 'kilometer'|| outputunit == 'meter' || outputunit == 'decimeter' 
		|| outputunit == 'centimeter' || outputunit == 'millimeter') {
		var outputsys = 'metric';
	} else {
		var outputsys = 'imperial';
	}

	// Convert outputvalue to input base units
	if (inputsys == 'metric') {
		if (inputunit == 'kilometer') {
			outputvalue *= 1000;
		} else if (inputunit == 'decimeter') {
			outputvalue *= .1;
		} else if (inputunit == 'centimeter') {
			outputvalue *= .01;
		} else if (inputunit == 'millimeter') {
			outputvalue *= .001;
		}
	}	else {
    if (inputunit == 'mile') {
      outputvalue *= 63360;
    } else if (inputunit == 'yard') {
      outputvalue *= 36;
    } else if (inputunit == 'foot') {
      outputvalue *= 12;
    } 
  }

	// Convert systems if necessary
	if (inputsys == 'imperial' && outputsys == 'metric') {
		outputvalue *= 0.0254;
	} else if (inputsys == 'metric' && outputsys == 'imperial') {
		outputvalue /= 0.0254;
	}
  
	// Convert outputvalue to output units
  if (outputsys == 'metric') {
		if (outputunit == 'kilometer') {
			outputvalue /= 1000;
		} else if (outputunit == 'decimeter') {
			outputvalue /= .1;
		} else if (outputunit == 'centimeter') {
			outputvalue /= .01;
		} else if (outputunit == 'millimeter') {
			outputvalue /= .001;
		}
	}	else {
    if (outputunit == 'mile') {
      outputvalue /= 63360;
    } else if (outputunit == 'yard') {
      outputvalue /= 36;
    } else if (outputunit == 'foot') {
      outputvalue /= 12;
    } 
  }
  


	// Display return value
	document.getElementById('return').innerHTML = outputvalue.toFixed(4)
}
