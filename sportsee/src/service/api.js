export async function api(userId) {
  const urlUser = `http://localhost:3000/user/${userId}`;

  const urlUserActivity = `http://localhost:3000/user/${userId}/activity`;

  const urlUserAverage = `http://localhost:3000/user/${userId}/average-sessions`;

  const urlUserPerfomance = `http://localhost:3000/user/${userId}/performance`;

  const urls = [urlUser, urlUserActivity, urlUserAverage, urlUserPerfomance];

  try {
    const resp = await Promise.all(urls.map((url) => fetch(url)));
    const data = await Promise.all(resp.map((res) => res.json()));
    return data.map((elt) => {
      return elt.data;
    });
  } catch (error) {
    console.error(error);
  }
  return true;
}
