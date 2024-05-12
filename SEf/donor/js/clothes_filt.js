var currentFilters={}

function addFilter(filter) {
	currentFilters = { ...currentFilters, ...filter }
}



function populateDiv() {
    let data = [
        {
            caption: '80%',
            type: 'donation request 1',
            name: 'James Smith',
            gender: 'male',
			type_cloth:'t-shirt',
            season: 'summer'
        },
        {
            caption: '80%',
            type: 'donation request 2',
            name: 'James Smith',
            gender: 'male',
			type_cloth:'pants',
            season: 'summer'
        },
        {
            caption: '80%',
            type: 'donation request 3',
            name: 'James Smith',
            gender: 'female',
            type_cloth:'shirt',
            season: 'spring'
        },
        {
            caption: '80%',
            type: 'donation request 4',
            name: 'James Smith',
            gender: 'female',
            type_cloth:'hoodie',
            season: 'winter'
        },
        {
            caption: '80%',
            type: 'donation request 5',
            name: 'James Smith',
            gender: 'male',
			type_cloth: 'pullover',
            season: 'winter'
        },
        {
            caption: '80%',
            type: 'donation request 6',
            name: 'James Smith',
            gender: 'male',
			type_cloth: 'shorts',
            season: 'summer'
        }
    ]

    let itemsDiv = document.getElementById('donationRequests')
    itemsDiv.textContent = ''

    data.forEach((item, key) => {
        let itemPassesFilter = true;
        for (const filterKey in currentFilters) {
            if (filterKey in item && item[filterKey] !== currentFilters[filterKey]) {
                itemPassesFilter = false;
                break;
            }
        }
        if (itemPassesFilter) {
            itemsDiv.innerHTML += `
                <div class="col-md-4" key=${key}>
                          <div class="cause shadow-sm">
                            <a href="#" class="cause-link d-block">
                              <img src="images/img_1.jpg" alt="Image" class="img-fluid">
                              <div class="custom-progress-wrap">
                                <span class="caption">${item.caption}</span>
                                <div class="custom-progress-inner">
                                  <div class="custom-progress bg-danger" style="width: 80%;"></div>
                                </div>
                              </div>
                            </a>

                            <div class="px-3 pt-3 border-top-0 border border shadow-sm">
                              <div class="badge-danger py-1 small px-2 rounded mb-3 d-inline-block" class="badge School">${item.type_cloth}
                              </div>
                              <div class="badge-primary py-1 small px-2 rounded mb-3 d-inline-block" class=badge Health>${item.season}
                      </div>
							  

                              <h3 class="mb-4"><a href="#">${item.type}</a></h3>
                              <div class="border-top border-light border-bottom py-2 d-flex">
                                <div>${item.gender}</div>
                                <div class="ml-auto"><strong class="text-primary"></strong></div>
                              </div>

                              <div class="py-4">
                                <div class="d-flex align-items-center">
                                  <img src="images/person_1.jpg" alt="Image" class="rounded-circle mr-3" width="50">
                                  <div class="">${item.name}</div>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
            `;
        }
    });
}

document.onload(populateDiv())

window.addFilter=addFilter
window.populateDiv=populateDiv
window.onload=populateDiv