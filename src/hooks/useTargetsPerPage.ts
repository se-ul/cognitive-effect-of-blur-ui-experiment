import { useEffect, useState } from "react";
import { TargetModel } from "../models";

export function useTargetsPerPage(
  initialValues: number[],
  page: number,
  numberOfTargetsPerPage: number,
  experimentPage: number
) {
  const [targets, setTargets] = useState<TargetModel[]>(
    initialValues.map((value) => ({ value, checked: false }))
  );

  const startIndex = page * numberOfTargetsPerPage;
  const endIndex = (page + 1) * numberOfTargetsPerPage;

  const currentTargets = targets.slice(startIndex, endIndex);

  const targetCount = currentTargets.filter(
    (target) => target.value === 3
  ).length;
  const remainedTargetCount = currentTargets.filter(
    (target) => target.value === 3 && !target.checked
  ).length;

  const setCurrentTarget = (newValues: TargetModel[]) =>
    setTargets([
      ...targets.slice(0, startIndex),
      ...newValues,
      ...targets.slice(endIndex),
    ]);

  useEffect(() => {
    setTargets(initialValues.map((value) => ({ value, checked: false })));
  }, [experimentPage]);

  return {
    currentTargets,
    targetCount,
    remainedTargetCount,
    setCurrentTarget,
  };
}
