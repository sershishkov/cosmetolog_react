export const handleSearchInArray = (origArray, searchData) => {
  const newRows = [...origArray];

  // Вернули массив с преобразованными объектами в массив только значений по которым будем искать
  const аrray_Of_Arrays = newRows.map((row) =>
    Object.values(row).filter(
      (option) => option !== true && option !== false && option !== null
    )
  );

  // создали массивы со значением true or false
  //те находим ячейки где есть совпадения
  //будет массив массивов только с true или false
  const matches = аrray_Of_Arrays.map((row) =>
    row.map((option) =>
      option
        .toString()
        .toLowerCase()
        .includes(searchData.toString().toLowerCase())
    )
  );

  //Если есть совпадения в строке то поле search=true
  matches.map((row, index) =>
    row.includes(true)
      ? (newRows[index].search = true)
      : (newRows[index].search = false)
  );

  let filteredArray = newRows.filter((row) => row.search === true);
  // console.log(origArray);
  // console.log(аrray_Of_Arrays);
  // console.log(matches);
  // console.log(filteredArray);

  return filteredArray;
};
