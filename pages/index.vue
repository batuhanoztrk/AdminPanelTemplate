<template>
  <div class="container-fluid">
    <h1 class="mt-4">
      {{ $t("sidebar.dashboard") }}
    </h1>
    <ol class="breadcrumb mb-4">
      <li class="breadcrumb-item">
        <a href="#">{{ $t("sidebar.core") }}</a>
      </li>
      <li class="breadcrumb-item active">{{ $t("sidebar.dashboard") }}</li>
    </ol>
    <div class="card mb-4">
      <div class="card-body">
        <h4>
          Bu panel Batuhan Öztürk tarafından hazırlanmıştır.<br /><br />Teknik
          destek için lütfen benimle
          <a href="mailto:batuhanoztrk@hotmail.com" target="_blank"
            >iletişime geçin</a
          >.
        </h4>
      </div>
    </div>
  </div>
</template>
