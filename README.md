## Yepeng's dotfiles settings 
Inspired from [thoughtbot/dotfiles](https://github.com/thoughtbot/dotfiles)

This is a set of customised configurations, including
[zsh](https://github.com/zsh-users/zsh), [vim](https://github.com/vim/vim) & [tmux](https://github.com/tmux/tmux)
settings as well as plugins.

### Some Instructions:
* Install [zsh](https://github.com/robbyrussell/oh-my-zsh)</br>
  ```
  curl -L github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh | sh
  ```
* Set zsh as the login shell </br>
  ```
  chsh -s $(which zsh)
  ```
* Install zsh plugin manager [antigen](https://github.com/zsh-users/antigen)
* Follow instructions of [dotfiles](https://github.com/thoughtbot/dotfiles)
* Run `rcup` to install & update plugins and also to remove unused plugins
* Install tmux plugin manager [tpm](https://github.com/tmux-plugins/tpm)

### Plugin locations
* Zsh plugins: `zshrc`
* Vim plugins: `vimrc.bundles`
* Tmux plugins: `tmux.conf`

### Tmux initialization
* Run `<Prefix> + I` to install all the plugins first

### Plugin Updates
* The zsh plugins are managed by
  [antigen](https://github.com/zsh-users/antigen). They will be automatically
check while zsh started.
* The vim plugins are managed by [rcm](https://github.com/thoughtbot/rcm). Run `rcup` to update plugins and remove
  unused plugins.
* The tmux plugins are managed by [tpm](https://github.com/tmux-plugins/tpm).
  Run `<Prefix> + U` will update tmux plugins and run `<Prefix> + alt + u` will
remove/uninstall plugins not on the plugin list.

### Airline font settings
* Clone powerline fonts from
  [powerline/fonts](https://github.com/Lokaltog/powerline-fonts)
* Change directory to `cd fonts` then install fonts to system `./install.sh`
* Set airline to use powerline fonts by adding `let g:airline_powerline_fonts =
  1` to `vimrc`
* Set iTerm2 to use powerline symbols by setting `Preference/Text/No ASCII fonts` to
  `12pt Sauce Code Powerline`

### Homebrew packages
* Check brew package file [packages](./packages)
* To install all listed packages, run `./brew_install_packages.sh`

### Install eslint style checker

```
npm install -g eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
```

```
eslint --init
```

### Keep fork updated
#### Track upstream repo
* git clone git@github.com:yepengfan/dotfiles.git
* cd dotfiles
* git remote add upstream git@github.com:thoughtbot/dotfiles.git

#### Update upstream and rebase to current HEAD
* git fetch upstream
* git rebase upstream/master

**Please change the** `user info` **in gitconfig to yourself if you fork this repo**

### Instructions to setup eslint in vim
https://remarkablemark.org/blog/2016/09/28/vim-syntastic-eslint/
