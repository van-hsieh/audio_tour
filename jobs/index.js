const { generateDescription, textToSpeach } = require("./createAttraction");

// const attractionTextObj = generateDescription({
//   name: "Golden Gate Bridge",
//   city: "San Francisco",
//   state: "California",
// });

// console.log(attractionTextObj);

// const attractionText =
//   attractionTextObj?.choices && attractionTextObj?.choices[0]?.message?.content;

// textToSpeach(attractionText, {
//   name: "Golden Gate Bridge",
//   city: "San Francisco",
//   state: "California",
// });

// const testText = `The Golden Gate Bridge, my friends, is an absolute gem here in San Francisco! This iconic suspension bridge is one of the most recognizable landmarks not just in the city, but in the entire world. So buckle up and get ready for a speedy trip through its history and some fun facts that will leave you in awe.

// Let's start with the basics. The Golden Gate Bridge stretches across the entrance of the famous Golden Gate Strait, which connects the Pacific Ocean to the San Francisco Bay. Construction began back in 1933 and was completed in 1937, making it an impressive feat of engineering in such a short span of time.

// Now, the color might catch your eye. You'd think they painted it gold or something, right? But nope, that's not the case. The bridge actually gets its name from the strait it spans, the Golden Gate Strait. It's named after the "Golden Horn" in Istanbul, which is often mentioned in literature for its beauty. So think of it as the "Golden Gate" because it's a gateway to all the wonder and beauty that San Francisco has to offer.

// One of the most incredible things about the Golden Gate Bridge is its sheer size. It stretches a whopping 1.7 miles (2.7 kilometers) long and towers over 746 feet (227 meters) above the water. That's taller than a 65-story building! It's so massive that it takes about 38,000 gallons of paint just to give it a fresh coat.

// Now, brace yourselves for some wind-related weirdness. The bridge sits in a pretty windy spot, and let me tell you, it can get windy up there! On an average day, the winds can reach speeds of up to 60 miles per hour (97 kilometers per hour). Yup, that's some serious wind! But hey, at least it'll give you that windswept look for your selfies, right?

// Oh, and did I mention the fog? San Francisco is known for its fog, and the Golden Gate Bridge is no exception. In fact, it's almost like the bridge is playing peek-a-boo with all those layers of fog. There's even a famous quote that goes, "The coldest winter I ever spent was a summer in San Francisco." Mark Twain said it, and boy, was he right! So make sure to pack a sweater even in the summer months.

// Lastly, if you're brave enough to walk or bike across the bridge, I highly recommend it. The views are absolutely spectacular! On a clear day, you'll be treated to breathtaking panoramic views of the city skyline, Alcatraz Island, and the rolling hills of Marin County. And who knows, you might even spot a few dolphins or whales swimming in the bay.

// All in all, my dear friends, the Golden Gate Bridge is an architectural masterpiece that deserves all the admiration it receives. It symbolizes the grit, determination, and beauty of our beautiful city. So grab your camera, take a deep breath of that salty sea air, and let the magic of the Golden Gate Bridge wash over you.`;

// textToSpeach(testText, {
//   name: "Golden Gate Bridge",
//   city: "San Francisco",
//   state: "California",
// });

// call attractionTextObj and once we get the response, call textToSpeach with the response and the attraction object

generateDescription({
  name: "Fisherman Wharf",
  city: "San Francisco",
  state: "California",
})
  .then((attractionTextObj) => {
    const attractionText =
      attractionTextObj?.choices &&
      attractionTextObj?.choices[0]?.message?.content;

    textToSpeach(attractionText, {
      name: "Fisherman Wharf",
      city: "San Francisco",
      state: "California",
    });
  })
  .catch((error) => {
    console.error("Error generating description:", error);
  });
