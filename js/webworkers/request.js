// Incoming Format: [readURL, true|false]
// Outgoing Format:  [isError, Response_data, isInitial(passthru value)]

onmessage = function (event) {
 console.log("Requesting..");
 fetch(event.data[0])
  .then(function (response) {
   if (response.status !== 200) {
    postMessage([true, 0, event.data[1]]);
    console.log("Status code error: " + response);
   } else {
    response.json().then(function (data) {
     console.log(data);
     postMessage([false, data, event.data[1]]);
    });
   }
  })
  .catch(function (err) {
   postMessage([true, 0, event.data[1]]);
   console.log("Fetch Error : ", err);
  });
};
