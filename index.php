<div class="container">
  <div class="row">
    <div class="col-md-1">
    </div>
    <div class="col-md-10">
      <center><h2>Jobs interface</h2></center>
    </div>
    <div class="col-md-1">
    </div>
  </div>
</div>

<div class="container">
  <div class="row">
    <div class="col-md-2">
      <p><button onclick="document.location='job_list.php'" class="btn btn-outline-dark" style="width:100%">Jobs List</button></p>

      <form method="post" action="post_joblist.php">
        <input type="hidden" name="Skills" id="Skills" value="null">
        <p><button onclick="document.location='post_joblist.php'" class="btn btn-outline-dark" style="width:100%" >find skills</button></p>
      </form>
      <p><button onclick="document.location='list_account.php'" class="btn btn-outline-dark" style="width:100%">list_account</button></p>
      <p><button onclick="document.location='list_post.php'" class="btn btn-outline-dark" style="width:100%">list post</button></p>
    </div>
    <div class="col-md-10">
    </div>
  </div>
</div>
