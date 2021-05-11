//https://material-table.com/#/
import React from 'react';
import MaterialTable from 'material-table';
// import Chip from '@material-ui/core/Chip';

const MaterialTable_my = (props) => {
  return (
    <MaterialTable
      title={props.title}
      columns={props.columns}
      data={props.data}
      options={{
        sorting: props.sorting ? props.sorting : true,
        search: props.search ? props.search : true,
        pageSize: props.search ? props.search : 10,
        filtering: props.filtering ? props.filtering : false,
        selection: props.selection ? props.selection : false,
        rowStyle: {
          // backgroundColor: '#EEE',
        },
        headerStyle: {
          // backgroundColor: '#EEE',
          // color: '#f00',
        },
        searchFieldStyle: {
          // color: '#f00',
        },
        showTitle: false,
      }}
      components={
        {
          // Toolbar: (props) => (
          //   <div>
          //     {/* <MTableToolbar {...props} /> */}
          //     <div style={{ padding: '0px 10px' }}>
          //       <Chip
          //         label='Chip 1'
          //         color='secondary'
          //         style={{ marginRight: 5 }}
          //       />
          //       <Chip
          //         label='Chip 2'
          //         color='secondary'
          //         style={{ marginRight: 5 }}
          //       />
          //       <Chip
          //         label='Chip 3'
          //         color='secondary'
          //         style={{ marginRight: 5 }}
          //       />
          //       <Chip
          //         label='Chip 4'
          //         color='secondary'
          //         style={{ marginRight: 5 }}
          //       />
          //       <Chip
          //         label='Chip 5'
          //         color='secondary'
          //         style={{ marginRight: 5 }}
          //       />
          //     </div>
          //   </div>
          // ),
        }
      }
      localization={{
        body: {
          emptyDataSourceMessage: 'Нет записей для показа',
          addTooltip: 'Добавить',
          deleteTooltip: 'Удалить',
          editTooltip: 'Редактировать',
          filterRow: {
            filterPlaceHolder: '',
            filterTooltip: 'Фильтр',
          },
          editRow: {
            deleteText: 'Вы уверены в удалении этой строки',
            cancelTooltip: 'Отменить',
            saveTooltip: 'Сохранить',
          },
          grouping: {
            placeholder: 'Drag headers ...',
            groupedBy: 'Grouped By:',
          },
          header: {
            actions: 'Actions',
          },
        },

        pagination: {
          labelDisplayedRows: '{from}-{to} из {count}',
          labelRowsSelect: 'Строк',
          labelRowsPerPage: 'Строк на странице:',
          firstAriaLabel: 'Первая страница',
          firstTooltip: 'Первая страница',
          previousAriaLabel: 'Предыдущая страница',
          previousTooltip: 'Предыдущая страница',
          nextAriaLabel: 'Следующая страница',
          nextTooltip: 'Следующая страница',
          lastAriaLabel: 'Последняя страница',
          lastTooltip: 'Последняя страница',
        },
        toolbar: {
          addRemoveColumns: 'Добавить или удалить колонку',
          nRowsSelected: '{0} строк выбрано',
          showColumnsTitle: 'Показать колонки',
          showColumnsAriaLabel: 'Показать колонки',
          exportTitle: 'Exporter',
          exportAriaLabel: 'Exporter',
          exportName: 'Exporter en CSV',
          searchTooltip: 'Поиск',
          searchPlaceholder: 'Поиск',
        },
      }}
    />
  );
};

export default MaterialTable_my;
