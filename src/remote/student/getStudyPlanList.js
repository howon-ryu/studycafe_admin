import axios from "axios";

const defaultStudentForm = {
  studentId: null,
  fromDate: null,
  toDate: null,
  itemStatus: null,
};
const defaultpostStudentForm = {
  studentId: null,
  place: null,
  title: null,
  description: null,
  fromTime: null,
  toTime: null,
};

export const getStudyPlanList = async (studentForm = defaultStudentForm) => {
  const endpoint = `https://farm01.bitlworks.co.kr/api/v1/users/students/${studentForm.studentId}/study-plans`;
  try {
    const { data } = await axios.get(endpoint, {
      params: {
        fromDate: studentForm.fromDate,
        toDate: studentForm.toDate,
      },
    });
    console.log("endpoint:", endpoint);
    console.log("dataaaa:", data);
    return data;
  } catch (error) {
    return error;
  }
};
export const postStudyPlanList = async (
  studentForm = defaultpostStudentForm
) => {
  const endpoint = `https://farm01.bitlworks.co.kr/api/v1/items/study-plans`;

  console.log(studentForm.studentId);
  console.log(studentForm.title);
  console.log(studentForm.place);
  console.log(studentForm.description);
  console.log(studentForm.startTime);
  console.log(studentForm.endTime);
  try {
    const { data } = await axios.post(endpoint, {
      studentId: studentForm.studentId,
      place: studentForm.place,
      title: studentForm.title,
      description: studentForm.description,
      fromTime: studentForm.startTime + "T10:10:10.491Z",
      toTime: studentForm.endTime + "T10:10:13.491Z",
      // startTime: "2022-11-27T10:37:26.491Z",
      // endTime: "2022-11-27T10:37:26.491Z"
    });
    return data;
  } catch (error) {
    return error;
  }
};
