/**
 * Theme: Adminto - Responsive Bootstrap 5 Admin Dashboard
 * Author: Coderthemes
 * Module/App: Data tables
 */

document.addEventListener('DOMContentLoaded', function () {

    // Common pagination icons
    const paginationIcons = {
        paginate: {
            first: "<i class='ti ti-chevrons-left'></i>",
            previous: "<i class='ti ti-chevron-left'></i>",
            next: "<i class='ti ti-chevron-right'></i>",
            last: "<i class='ti ti-chevrons-right'></i>"
        }
    };

    // Default Datatable
    new DataTable('#basic-datatable', {
        keys: true,
        language: paginationIcons
    });

    // Buttons example
    const table = new DataTable('#datatable-buttons', {
        lengthChange: false,
        layout: {
            topStart: 'buttons'  // ensures buttons are placed correctly in the DOM
        },
        buttons: [
            { extend: 'copy', className: 'btn btn-sm btn-secondary' },
            { extend: 'csv', className: 'btn btn-sm btn-secondary active' },
            { extend: 'excel', className: 'btn btn-sm btn-secondary' },
            { extend: 'print', className: 'btn btn-sm btn-secondary active' },
            { extend: 'pdf', className: 'btn btn-sm btn-secondary' }
        ],
        language: paginationIcons
    });

    if (table?.buttons) {
        table.buttons().container().appendTo('#datatable-buttons_wrapper .col-md-6:eq(0)');
    }

    // Multi-selection Datatable
    new DataTable('#selection-datatable', {
        select: { style: 'multi' },
        language: paginationIcons
    });

    // Scroll Vertical
    new DataTable('#scroll-vertical-datatable', {
        scrollY: '350px',
        scrollCollapse: true,
        paging: false,
        language: paginationIcons
    });

    // Complex Header
    new DataTable('#complex-header-datatable', {
        columnDefs: [{ targets: -1, visible: false }],
        language: paginationIcons
    });

    // Row Callback
    new DataTable('#row-callback-datatable', {
        language: paginationIcons,
        createdRow: function (row, data) {
            if (parseFloat(data[5].replace(/[\$,]/g, '')) > 150000) {
                row.querySelectorAll('td')[5]?.classList.add('text-danger');
            }
        }
    });

    // State Save
    new DataTable('#state-saving-datatable', {
        stateSave: true,
        language: paginationIcons
    });

    // Fixed Header
    new DataTable('#fixed-header-datatable', {
        fixedHeader: true,
        pageLength: 25,
        lengthMenu: [15, 25, 50, -1],
        language: paginationIcons
    });

});