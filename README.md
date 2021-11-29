# page-views
Get page views from logs.

Demo:
http://Libida.github.io/page-views

Description:
* user can upload a log file as a form input (examples of file can be taken from test-data folder);
* after processing of uploaded log files, lists of webpages with total page views and unique page views (ordered from most to least page views) should be shown.

What was done:
* functionality according to description above;
* responsive layout;
* A11y (rems, semantic markup);
* unit testing on example of src/utils/file;
* snapshot testing on example of UploadForm.

If there would be more time/requirements than:
* would analyze corner cases of uploaded files and how to handle them (different symbols for line break, ;
* would analyze potential limitations of file size and would adjust algorithm of file parsing if would needed to improve parsing speed;
* would add prop types checking + default prop values with Prop Types;
* would add prettier, eslint;
* would add all tests;
* would make a re-factoring;
