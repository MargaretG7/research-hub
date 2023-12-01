import { Injectable } from '@nestjs/common';
import { MemberRepositoryService } from '../member-repository/member-repository.service';

@Injectable()
export class MemberService {
  constructor(private repo: MemberRepositoryService) {}

  async getMemberById(id: number) {
    return await this.repo.getMemberById(id);
  }

  async getMembersSeedGroups(id: number) {
    return await this.repo.getMembersSeedGroups(id);
  }

  async getMemberSeedGroupHistoryRecord(id: number, seedGroupId: number) {
    return await this.repo.getMemberSeedGroupHistoryRecord(id, seedGroupId);
  }
}
