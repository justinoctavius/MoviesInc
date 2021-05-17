const getActors = async (credits) => {
  return await credits?.cast?.map((credit) => {
    if (credit.known_for_department == 'Acting') {
      return credit;
    }
  });
};

export default getActors;
