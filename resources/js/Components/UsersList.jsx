export default function UsersList({  }) {

    return (
        <>
            <div class="card-body px-0 py-0">
            <div class="table-responsive p-0">
                <table class="table align-items-center mb-0">
                  <thead class="bg-gray-100">
                    <tr>
                      <th class="text-secondary text-xs font-weight-semibold opacity-7">Login / imię</th>
                      <th class="text-center text-secondary text-xs font-weight-semibold opacity-7">Status</th>
                      <th class="text-center text-secondary text-xs font-weight-semibold opacity-7">Wystawionych opinii</th>
                      <th class="text-center text-secondary text-xs font-weight-semibold opacity-7">Ostatnie logowanie</th>
                      <th class="text-center text-secondary text-xs font-weight-semibold opacity-7">Data rejestracji</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div class="d-flex px-2 py-1">
                          <div class="d-flex align-items-center">
                            <img src="storage/img/team-2.jpg" class="avatar avatar-sm rounded-circle me-2" alt="user1" />
                          </div>
                          <div class="d-flex flex-column justify-content-center ms-1">
                            <h6 class="mb-0 text-sm font-weight-semibold">Elen42</h6>
                            <p class="text-sm text-secondary mb-0">Elena</p>
                          </div>
                        </div>
                      </td>
                      <td class="align-middle text-center text-sm">
                        <span class="badge badge-sm border border-success text-success bg-success">Online</span>
                      </td>
                      <td>
                        <p class="text-sm text-dark font-weight-semibold mb-0 text-center">17</p>
                      </td>
                      <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-normal">23.04.2022, 15:34</span>
                      </td>
                      <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-normal">23.04.2022, 15:34</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex px-2 py-1">
                          <div class="d-flex align-items-center">
                            <img src="storage/img/team-3.jpg" class="avatar avatar-sm rounded-circle me-2" alt="user2" />
                          </div>
                          <div class="d-flex flex-column justify-content-center ms-1">
                            <h6 class="mb-0 text-sm font-weight-semibold">Flexii</h6>
                            <p class="text-sm text-secondary mb-0">Faustyna</p>
                          </div>
                        </div>
                      </td>
                      <td class="align-middle text-center text-sm">
                        <span class="badge badge-sm border border-success text-success bg-success">Online</span>
                      </td>
                      <td>
                        <p class="text-sm text-dark font-weight-semibold mb-0 text-center">23</p>
                      </td>
                      <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-normal">23.04.2022, 15:34</span>
                      </td>
                      <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-normal">23.04.2022, 15:34</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex px-2 py-1">
                          <div class="d-flex align-items-center">
                            <img src="storage/img/team-1.jpg" class="avatar avatar-sm rounded-circle me-2" alt="user3" />
                          </div>
                          <div class="d-flex flex-column justify-content-center ms-1">
                            <h6 class="mb-0 text-sm font-weight-semibold">Laurentis</h6>
                            <p class="text-sm text-secondary mb-0">Laura</p>
                          </div>
                        </div>
                      </td>
                      <td class="align-middle text-center text-sm">
                        <span class="badge badge-sm border border-secondary text-secondary bg-secondary">Offline</span>
                      </td>
                      <td>
                        <p class="text-sm text-dark font-weight-semibold mb-0 text-center">7</p>
                      </td>
                      <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-normal">23.04.2022, 15:34</span>
                      </td>
                      <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-normal">23.04.2022, 15:34</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex px-2 py-1">
                          <div class="d-flex align-items-center">
                            <img src="storage/img/marie.jpg" class="avatar avatar-sm rounded-circle me-2" alt="user4" />
                          </div>
                          <div class="d-flex flex-column justify-content-center ms-1">
                            <h6 class="mb-0 text-sm font-weight-semibold">Mili_92</h6>
                            <p class="text-sm text-secondary mb-0">Michalina</p>
                          </div>
                        </div>
                      </td>
                      <td class="align-middle text-center text-sm">
                        <span class="badge badge-sm border border-secondary text-secondary bg-secondary">Offline</span>
                      </td>
                      <td>
                        <p class="text-sm text-dark font-weight-semibold mb-0 text-center">11</p>
                      </td>
                      <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-normal">23.04.2022, 15:34</span>
                      </td>
                      <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-normal">23.04.2022, 15:34</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex px-2 py-1">
                          <div class="d-flex align-items-center">
                            <img src="storage/img/team-5.jpg" class="avatar avatar-sm rounded-circle me-2" alt="user5" />
                          </div>
                          <div class="d-flex flex-column justify-content-center ms-1">
                            <h6 class="mb-0 text-sm font-weight-semibold">RichardGran</h6>
                            <p class="text-sm text-secondary mb-0">Rysiek</p>
                          </div>
                        </div>
                      </td>
                      <td class="align-middle text-center text-sm">
                        <span class="badge badge-sm border border-secondary text-secondary bg-secondary">Offline</span>
                      </td>
                      <td>
                        <p class="text-sm text-dark font-weight-semibold mb-0 text-center">9</p>
                      </td>
                      <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-normal">23.04.2022, 15:34</span>
                      </td>
                      <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-normal">23.04.2022, 15:34</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex px-2 py-1">
                          <div class="d-flex align-items-center">
                            <img src="storage/img/team-6.jpg" class="avatar avatar-sm rounded-circle me-2" alt="user6" />
                          </div>
                          <div class="d-flex flex-column justify-content-center ms-1">
                            <h6 class="mb-0 text-sm font-weight-semibold">Mirias99</h6>
                            <p class="text-sm text-secondary mb-0">Mirosław</p>
                          </div>
                        </div>
                      </td>
                      <td class="align-middle text-center text-sm">
                        <span class="badge badge-sm border border-secondary text-secondary bg-secondary">Offline</span>
                      </td>
                      <td>
                        <p class="text-sm text-dark font-weight-semibold mb-0 text-center">0</p>
                      </td>
                      <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-normal">23.04.2022, 15:34</span>
                      </td>
                      <td class="align-middle text-center">
                        <span class="text-secondary text-xs font-weight-normal">23.04.2022, 15:34</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="m-3">
                <div class="px-3 d-flex w-100 justify-content-center">
                  <button class="btn btn-sm btn-white d-sm-block d-none mb-0 me-3">Previous</button>
                  <nav aria-label="..." class="">
                    <ul class="pagination pagination-light mb-0">
                      <li class="page-item active" aria-current="page">
                        <span class="page-link font-weight-bold">1</span>
                      </li>
                      <li class="page-item"><a class="page-link border-0 font-weight-bold" href="javascript:;">2</a></li>
                      <li class="page-item"><a class="page-link border-0 font-weight-bold d-sm-inline-flex d-none" href="javascript:;">3</a></li>
                      <li class="page-item"><a class="page-link border-0 font-weight-bold" href="javascript:;">...</a></li>
                      <li class="page-item"><a class="page-link border-0 font-weight-bold d-sm-inline-flex d-none" href="javascript:;">8</a></li>
                      <li class="page-item"><a class="page-link border-0 font-weight-bold" href="javascript:;">9</a></li>
                      <li class="page-item"><a class="page-link border-0 font-weight-bold" href="javascript:;">10</a></li>
                    </ul>
                  </nav>
                  <button class="btn btn-sm btn-white d-sm-block d-none mb-0 ms-3">Next</button>
                </div>
              </div>
            </div>

            </>
    );
}
