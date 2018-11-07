class Node{
	constructor(value){
		this.value=value;
		this.children=[];
		this.parent=null;
	}
	addChild(node){
		this.children.push(node);
		node.parent=this;
		return this;
	}
	getSiblings(){
		let _self=this;
		if(this.parent!==null&&this.parent.children.length>0){
			
				return this.parent.children.filter(x=>x!=_self)
		
		}else{
			return null;
		}
	}
	getDepth(){
		//从上到下
		let depth=0;
		let node=this;
		while (node.parent!=null) {
			// statement
			depth++;
			node=node.parent
		}
		return depth;
	}
	getHeight(){
		//从下到上
		//广度优先
		let node=[this];
		let height=0;
		while (node.some(x=>x.children.length>0)) {
		
			height++;
			node=(node.filter(x=>x.children.length>0).map(x=>x.children))[0];
		
		}
		return height ;
	}
	getAllNum(){
		let node=this;
		while(node.parent!=null){
			node=node.parent;
		}
		let num=1;
		node=[node];
		while(node.some(x=>x.children.length>0)){
			node.map(x=>num+=x.children.length);
			node=(node.filter(x=>x.children.length>0).map(x=>x.children))[0];
		}
		return num;
	}
	getRoot(){
			let node=this;
		while(node.parent!=null){
			node=node.parent;
		}
		node=[node];
		return node;
	}
	findNode(nodeValue){
		let node=this.getRoot();
		while(node.some(x=>x.children.length>0)){
			if(node.filter(x=>x.value=nodeValue)){
				return 'true';
			}
			node=(node.filter(x=>x.children.length>0).map(x=>x.children))[0];
		}
		return 'no'
	}
}


class Tree{
	constuctor(root,name){
		this.root=root;
		this.name=name;
	}
	addChild(node){
		this.root.push(node)
	}
}

const rootNode=new Node('rootNode');
const node1=new Node('node1');
const node2=new Node('node2');
const node3=new Node('node3');

rootNode.addChild(node1).addChild(node2);
node1.addChild(node3);


