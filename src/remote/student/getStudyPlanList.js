import axios from "axios";

const defaultStudentForm = {
  studentId: null,
  startDate: null,
  endDate: null,
  itemStatus: null,
};

export const getStudyPlanList = async (studentForm = defaultStudentForm) => {
  const endpoint = `https://farm01.bitlworks.co.kr/api/v1/users/students/${studentForm.studentId}/study-plans`;
  try {
    const { data } = await axios.get(endpoint, {
      params: {
        startDate: studentForm.startDate,
        endDate: studentForm.endDate,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};
