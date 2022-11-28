import axios from "axios";

const defaultGroupForm = {
  name: null,
  status: null,
  branchId: null,
};
const defaultRoomForm = {
  branchId: 0,
  name: null,
  availableSeat: null,
  status: null,
};

export const postGroup = async (GroupForm = defaultGroupForm) => {
  const endpoint = `https://farm01.bitlworks.co.kr/api/v1/users/groups`;
  console.log(GroupForm);
  try {
    const { data } = await axios.post(endpoint, {
      name: GroupForm.name,
      status: GroupForm.status,
      branchId: GroupForm.branchId,
    });
    console.log("endpoint:", endpoint);
    console.log("dataaaa:", data);
    return data;
  } catch (error) {
    return error;
  }
};
export const postRoom = async (RoomForm = defaultRoomForm) => {
  const endpoint = `https://farm01.bitlworks.co.kr/api/v1/branches/rooms`;

  try {
    const { data } = await axios.post(endpoint, {
      branchId: RoomForm.branchId,
      name: RoomForm.name,
      availableSeat: RoomForm.availableSeat,
      status: RoomForm.status,
    });
    return data;
  } catch (error) {
    return error;
  }
};
