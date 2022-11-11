export class UserModel {
  constructor(data) {
    this.id = data[0].id;
    this.userInfos = data[0].userInfos;
    this.score = data[0].todayScore ?? data[0].score;
    this.keyData = data[0].keyData;
    this.sessions = data[1].sessions;
    this.averageSessions = data[2].sessions;
    this.performance = data[3];
  }
}
