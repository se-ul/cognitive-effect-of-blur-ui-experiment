export const numberOfBackgroundTargetsPerPage = 20;
export const numberOfModalTargetsPerPage = 9;
export const numberOfSets = 5;

export const expData1 = {
  backgroundValues: [
    ...new Array(numberOfBackgroundTargetsPerPage * numberOfSets),
  ].map(() => Math.floor(Math.random() * 4)),
  modalValues: [...new Array(numberOfModalTargetsPerPage * numberOfSets)].map(
    () => Math.floor(Math.random() * 4)
  ),
};
