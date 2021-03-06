<?php
require "../modules/conDB.php";
?>
<a href="#" id="btn-addMember" class="btn btn-primary">
    <i class="fa fa-plus"></i>
    Add Member
</a>
<br></br>
<table class="table table-striped">
    <thead>
        <th>#</th>
        <th>Email</th>
        <th>Name</th>
        <th>Year</th>
        <th>Age</th>
        <th></th>
    </thead>
    <tbody>
        <?php
        $sql = "SELECT * FROM tb_member";
        $members = $myqsli->query($sql);
        $no = 1;
        while ($member = $members->fetch_row()) {
        ?>
            <tr>
                <td><?= $no++ ?></td>
                <td><?= $member[0] ?></td>
                <td><?= $member[1] . " " . $member[2] ?></td>
                <td><?= $member[3] ?></td>
                <td><?= date("Y") - $member[3] ?></td>
                <td>
                    <a href="#" class="btn-delMember" email="<?= $member[0] ?>">
                        <i class="fa fa-trash"></i>
                    </a>
                </td>
            </tr>
        <?php
        }
        ?>
    </tbody>
</table>
<script src="./views/memberJ.js"></script>