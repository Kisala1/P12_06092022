export class UserModel {
  constructor(data, activity, average, performance) {
    this.id = data.id;
    this.userInfos = data.userInfos;
    this.score = data.todayScore ?? data.score;
    this.keyData = data.keyData;

    this.sessions = this.getSessions(activity);
    this.averageSessions = this.getAverage(average);
    this.performance = this.getPerformance(performance);
  }

  getSessions(activity) {
    return activity.find((entry) => entry.userId === this.id).sessions;
  }
  getAverage(average) {
    return average.find((entry) => entry.userId === this.id).sessions;
  }
  getPerformance(performance) {
    return performance.find((entry) => entry.userId === this.id);
  }
}
