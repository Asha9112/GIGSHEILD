const STORAGE_KEY = "gigshieldWorker";

const defaultWorker = {
  personal: {
    fullName: "",
    mobile: "",
    email: "",
    dateOfBirth: "",
    bloodGroup: "",
    address: "",
  },

  work: {
    workerType: "",
    platform: "",
    vehicleNumber: "",
  },

  nominee: {
    name: "",
    relationship: "",
    mobile: "",
  },

  membership: {
    plan: "",
    price: 0,
    coverage: "",
    status: "Inactive",
    workerId: "",
    memberSince: "",
  },
};


export function getWorkerData() {
  try {
    const storedData = localStorage.getItem(STORAGE_KEY);

    if (!storedData) {
      return defaultWorker;
    }

    const parsedData = JSON.parse(storedData);

    return {
      personal: {
        ...defaultWorker.personal,
        ...parsedData.personal,
      },

      work: {
        ...defaultWorker.work,
        ...parsedData.work,
      },

      nominee: {
        ...defaultWorker.nominee,
        ...parsedData.nominee,
      },

      membership: {
        ...defaultWorker.membership,
        ...parsedData.membership,
      },
    };
  } catch (error) {
    console.error("Unable to read worker data:", error);

    return defaultWorker;
  }
}


export function updateWorkerSection(section, values) {
  const currentWorker = getWorkerData();

  const updatedWorker = {
    ...currentWorker,

    [section]: {
      ...currentWorker[section],
      ...values,
    },
  };

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updatedWorker)
  );

  return updatedWorker;
}


export function savePersonalDetails(values) {
  return updateWorkerSection("personal", values);
}


export function saveWorkDetails(values) {
  return updateWorkerSection("work", values);
}


export function saveNomineeDetails(values) {
  return updateWorkerSection("nominee", values);
}


export function saveMembershipDetails(values) {
  return updateWorkerSection("membership", values);
}


export function clearWorkerData() {
  localStorage.removeItem(STORAGE_KEY);
}