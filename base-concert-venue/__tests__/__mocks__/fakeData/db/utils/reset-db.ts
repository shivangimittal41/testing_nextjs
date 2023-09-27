import { readFakeData } from "@/__tests__/__mocks__/fakeData";
import { filenames, writeJSONToFile } from "@/lib/db/db-utils";

export const resetDB = async () => {
  const safeToReset = process.env.NODE_ENV === "test" || process.env.CYPRESS;
  if (!safeToReset) {
    console.log("Warning: DB reset not allowed outside the test env");
    return;
  }
  const { fakeShows, fakeBands, fakeUsers, fakeReservations } =
    await readFakeData();

  await Promise.all([
    writeJSONToFile(filenames.bands, fakeBands),
    writeJSONToFile(filenames.shows, fakeShows),
    writeJSONToFile(filenames.reservations, fakeReservations),
    writeJSONToFile(filenames.users, fakeUsers),
  ]);
};
