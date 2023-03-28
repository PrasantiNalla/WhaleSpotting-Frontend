
export const backendUrl = import.meta.env.VITE_BACKEND_URL;

export interface NewUser {
  username: string;
  password: string;
  userBio: string;
  profileImageUrl: string;
}

export interface NewSighting{
    dateOfSighting: Date;
    locationLatitude: number;
    locationLongitude: number;
    photoImageURL: string;
    numberOfWhales: number;
    description: string;
    whaleSpecies: string;
}

export const checkBackendConnection = async (): Promise<boolean> => {
    let response: Response;
    try {
      response = await fetch(`${backendUrl}/test`);
    } catch {
      return false;
    }
    return response.ok;
}

export async function createSighting(newSighting: NewSighting): Promise<Response> {
    const response = await fetch(`https://${backendUrl}/sightings/submit`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newSighting),
    });

    if (!response.ok) {
        throw new Error(await response.json())
    }else{
      return response;
    }
}

export async function createNewUser(newUser: NewUser): Promise<Response> {
  const response = await fetch(`${backendUrl}/users/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newUser),
  });
  if (!response.ok) {
    throw new Error(await response.json());
  }
  else {
    return response;
  }
}

export interface SpeciesSearch {
  tailType: number;
  size: number;
  colour: string;
}

export async function fetchSpeciesQuery(speciesSearch: SpeciesSearch): Promise<Response> {
  const response = await fetch(`${backendUrl}/species?TailType=${speciesSearch.tailType}&Size=${speciesSearch.size}&Colour=${speciesSearch.colour}`);
  if (!response.ok) {
    throw new Error(await response.json());
  } else {
    return await response.json();
  }
}
