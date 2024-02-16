function handleFormSubmit(event) {
  event.preventDefault();

  //console.log(form.querySelector('input[name="q1"]'));
  //const formData = new FormData(form);
  //console.log("formData = " + formData.get("q1"));

  const data = new FormData(event.target);
  //console.log("data = " + data);
  let formJSON = Object.fromEntries(data.entries());

  //$("#answers").html(JSON.stringify(formJSON));

  $("#resultsQ1 span").text(formJSON.q1);
  $("#resultsQ2 span").text(formJSON.q2);
  $("#resultsQ3 span").text(formJSON.q3);
  $("#resultsQ4 span").text(formJSON.q4);
  $("#resultsQ5 span").text(formJSON.q5);
  $("#resultsQ6 span").text(formJSON.q6);
  $("#resultsQ7 span").text(formJSON.q7);

  if (formJSON.q8 === undefined) {
    $("#results_Confirm1").show();
  }

  if (formJSON.q9 === undefined) {
    $("#results_Confirm2").show();
  }

  $("#results").show();
  $("#questions").hide();
}

const form = document.querySelector("#questions");
form.addEventListener("submit", handleFormSubmit);

$("#editBrief").click(function () {
  $("#results").hide();
  $("#questions").show();
});

$("#copyBrief").click(function () {
  let text = document.getElementById("details").innerText;
  console.log(text);
  //navigator.clipboard.writeText(text);
  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(text);
      console.log("Content copied to clipboard");
      document.getElementById("copyIcon").classList.remove('bi-clipboard-plus-fill');
      document.getElementById("copyIcon").classList.add('bi-check-lg');
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  copyContent();
});

