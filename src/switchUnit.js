function switchUnit() {
  const unitBtn = document.querySelector(".switchUnit");

  unitBtn.addEventListener("click", () => {
    const tempDiv = document.querySelector(".currentTemp");
    const feelTemp = document.querySelector(".feelTemp");
    const unitDiv = document.querySelector(".unit");

    if (unitDiv.innerHTML === "°C") {
      tempDiv.innerHTML = (Number(tempDiv.innerHTML) * 1.8 + 32).toPrecision(3);
      feelTemp.innerHTML = (Number(feelTemp.innerHTML) * 1.8 + 32).toPrecision(
        3
      );
      unitDiv.innerHTML = "°F";
    } else {
      tempDiv.innerHTML = ((Number(tempDiv.innerHTML) - 32) / 1.8).toPrecision(
        3
      );
      feelTemp.innerHTML = (
        (Number(feelTemp.innerHTML) - 32) /
        1.8
      ).toPrecision(3);
      unitDiv.innerHTML = "°C";
    }
  });
}

export { switchUnit };
