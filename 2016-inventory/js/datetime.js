/**
	 * [numberScroll 时间翻牌]
	 * @param  {[type]} shownumber [数字]
	 * @param  {[type]} cycle      [循环次数]
	 * @param  {[type]} speeds     [速度比例]
	 */
	function numberScroll(shownumber, cycle, speeds, box) {
		var _this = this;

		this.numberbox = document.getElementById(box);
		this.numberlist = document.createElement("div");
		this.numberlist.className = "numberlist";
		this.numberbox.appendChild(this.numberlist);

		//显示的数字
		this.newsum = shownumber;

		//切割
		this.sum = this.newsum.split("");

		//循环的次数
		this.nums = cycle;

		this.oldscrollTop = [];
		this.timer = 0;

		//个数
		for(var i = 0; i < this.sum.length; i++) {
			this.newnumberli = document.createElement("div");
			this.newnumberli.className = "numberli";

			this.newchildul = document.createElement("ul");
			this.newchildul.className = "childul";

			for(var j = 0; j < 10; j++) {
				this.newlis = document.createElement("li");
				this.newlis.innerHTML = j;
				this.newchildul.appendChild(this.newlis);
			}

			//增加一层
			this.newchildul.innerHTML += this.newchildul.innerHTML;
			this.newnumberli.appendChild(this.newchildul);
			this.numberlist.appendChild(this.newnumberli);

			//设置初始高度
			this.oldscrollTop[i] = 0;
		}

		this.numberli = this.numberlist.getElementsByTagName("div");
		this.childul = this.numberli[0].getElementsByTagName("ul");
		this.lis = this.childul[0].getElementsByTagName("li");

		//获取总高度
		this.childulHeight = this.newchildul.offsetHeight / 2;

		//获取速度
		this.speed = this.childulHeight / speeds;

		//是否循环
		this.isture = true;

		//设置停止的位置
		this.inum = 0;

		//数字自动滚动
		this.timer = setInterval(function() {
			_this.listMove();
		}, 8);
	}
	numberScroll.prototype = {
		listMove: function() {
			if(this.isture) {
				for(var i = this.inum; i < this.numberli.length; i++) {
					this.numberli[i].scrollTop += this.speed;
					if(this.numberli[i].scrollTop >= this.childulHeight) {
						this.oldscrollTop[i] += this.numberli[i].scrollTop;
						this.numberli[i].scrollTop = 0;
					}
				}

				if(this.numberli[this.inum].scrollTop >= this.lis[0].offsetHeight * this.sum[this.inum] && this.numberli[this.inum].scrollTop <= this.lis[0].offsetHeight * (parseInt(this.sum[this.inum]) + 1) && this.oldscrollTop[this.inum] >= this.childulHeight * this.nums) {
					this.numberli[this.inum].scrollTop = this.lis[0].offsetHeight * this.sum[this.inum];

					//设置一个值停止滚动
					this.inum++;
					this.oldscrollTop[this.inum] = 0;

					if(this.inum >= this.numberli.length) {
						this.isture = false;
						this.isture = false;
					}
				}
			}
		}
	}