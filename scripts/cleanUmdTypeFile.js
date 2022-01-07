/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const fs = require('fs');
const fse = require('fs-extra');
const glob = require('glob');
const chalk = require('chalk');

const distPath = path.join(__dirname, '../dist');

const getAllFile = () => glob.sync(`${distPath}/*`);

const isDirectory = (filePath) => fs.statSync(filePath).isDirectory();
const isTypeFile = (filePath) => path.parse(filePath).ext === '.ts';

const cleanUmdTypeFile = () => {
  console.log(chalk.gray('clean umd type file...'));

  try {
    const allFile = getAllFile();
    allFile.forEach((filePath) => {
      if (isDirectory(filePath)) {
        fse.removeSync(filePath);
        console.log('clean directory: ', chalk.cyan(filePath));
      } else if (isTypeFile(filePath)) {
        fse.removeSync(filePath);
        console.log('clean type file: ', chalk.cyan(filePath));
      }
    });

    console.log(chalk.green('clean umd type file success'));
  } catch (err) {
    console.log(chalk.red('clean umd type file error:'));
    console.log(err);
  }
};

cleanUmdTypeFile();
