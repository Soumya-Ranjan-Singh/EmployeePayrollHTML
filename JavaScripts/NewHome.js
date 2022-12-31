window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

// Template literal ES6 feature
const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    const innerHtml = `${headerHtml}
        <tr>
            <th></th>
            <th>Name</th>
            <th>Gender</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Start Date</th>
            <th>Actions</th>
        </tr>
        <tr>
            <td><img class="profile" src="../assets/profile-images/Ellipse -2.png" alt=""></td>
            <td>Soumya Ranjan</td>
            <td>Male</td>
            <td><div class='dept-label'>Engineer</div><div class='dept-label'>Finance</div></td>
            <td>300000</td>
            <td>1 July 2020</td>
            <td>
                <img name="1" onclick="remove(this)" src="../assets/icons/delete-black-18dp.svg" alt="delete">
                <img name="1" onclick="update(this)" src="../assets/icons/create-black-18dp.svg" alt="edit">
            </td>
        </tr>
    `;
    document.querySelector('#table-display').innerHTML = innerHtml;
}