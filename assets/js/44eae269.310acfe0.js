"use strict";(self.webpackChunknote_book=self.webpackChunknote_book||[]).push([["80327"],{29479:function(n,r,e){e.r(r),e.d(r,{default:()=>u,frontMatter:()=>l,metadata:()=>i,assets:()=>d,toc:()=>o,contentTitle:()=>s});var i=JSON.parse('{"id":"Backend/Java/\u57FA\u7840/\u6570\u7EC4\u65B9\u6CD5\u548C\u5F15\u7528","title":"Java \u4E2D\u7684\u6570\u7EC4\u4E0E\u6392\u5E8F\u7B97\u6CD5","description":"\u6570\u7EC4\u4F5C\u4E3A\u65B9\u6CD5\u53C2\u6570","source":"@site/docs/Backend/Java/\u57FA\u7840/130.\u6570\u7EC4\u65B9\u6CD5\u548C\u5F15\u7528.md","sourceDirName":"Backend/Java/\u57FA\u7840","slug":"/Backend/Java/\u57FA\u7840/\u6570\u7EC4\u65B9\u6CD5\u548C\u5F15\u7528","permalink":"/docs-hub/Backend/Java/\u57FA\u7840/\u6570\u7EC4\u65B9\u6CD5\u548C\u5F15\u7528","draft":false,"unlisted":false,"editUrl":"https://github.com/sumingcheng/docs-hub/edit/main/docs/Backend/Java/\u57FA\u7840/130.\u6570\u7EC4\u65B9\u6CD5\u548C\u5F15\u7528.md","tags":[],"version":"current","lastUpdatedBy":"sumingcheng","lastUpdatedAt":1739167030000,"sidebarPosition":130,"frontMatter":{},"sidebar":"javaSidebar","previous":{"title":"Java \u6570\u7EC4\u8BE6\u89E3","permalink":"/docs-hub/Backend/Java/\u57FA\u7840/\u6570\u7EC4"},"next":{"title":"Java \u6CE8\u89E3\u8BE6\u89E3","permalink":"/docs-hub/Backend/Java/\u57FA\u7840/Java-\u539F\u751F\u6CE8\u89E3"}}'),a=e("85893"),t=e("50065");let l={},s="Java \u4E2D\u7684\u6570\u7EC4\u4E0E\u6392\u5E8F\u7B97\u6CD5",d={},o=[{value:"\u6570\u7EC4\u4F5C\u4E3A\u65B9\u6CD5\u53C2\u6570",id:"\u6570\u7EC4\u4F5C\u4E3A\u65B9\u6CD5\u53C2\u6570",level:2},{value:"\u5F62\u53C2\u662F\u4EC0\u4E48",id:"\u5F62\u53C2\u662F\u4EC0\u4E48",level:3},{value:"\u5F15\u7528\u5207\u65AD",id:"\u5F15\u7528\u5207\u65AD",level:3},{value:"\u4E8C\u7EF4\u6570\u7EC4",id:"\u4E8C\u7EF4\u6570\u7EC4",level:2},{value:"\u6768\u8F89\u4E09\u89D2",id:"\u6768\u8F89\u4E09\u89D2",level:2},{value:"\u6570\u7EC4\u67E5\u8BE2",id:"\u6570\u7EC4\u67E5\u8BE2",level:2},{value:"\u6570\u7EC4\u6392\u5E8F",id:"\u6570\u7EC4\u6392\u5E8F",level:2},{value:"\u5192\u6CE1\u6392\u5E8F",id:"\u5192\u6CE1\u6392\u5E8F",level:3},{value:"\u9009\u62E9\u6392\u5E8F",id:"\u9009\u62E9\u6392\u5E8F",level:3},{value:"\u76F4\u63A5\u63D2\u5165\u6392\u5E8F",id:"\u76F4\u63A5\u63D2\u5165\u6392\u5E8F",level:3},{value:"\u4E8C\u5206\u67E5\u627E",id:"\u4E8C\u5206\u67E5\u627E",level:2},{value:"Arrays \u5DE5\u5177\u7C7B",id:"arrays-\u5DE5\u5177\u7C7B",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2}];function c(n){let r={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.header,{children:(0,a.jsx)(r.h1,{id:"java-\u4E2D\u7684\u6570\u7EC4\u4E0E\u6392\u5E8F\u7B97\u6CD5",children:"Java \u4E2D\u7684\u6570\u7EC4\u4E0E\u6392\u5E8F\u7B97\u6CD5"})}),"\n",(0,a.jsx)(r.h2,{id:"\u6570\u7EC4\u4F5C\u4E3A\u65B9\u6CD5\u53C2\u6570",children:"\u6570\u7EC4\u4F5C\u4E3A\u65B9\u6CD5\u53C2\u6570"}),"\n",(0,a.jsx)(r.p,{children:"\u5728 Java \u4E2D\uFF0C\u5F53\u6570\u7EC4\u4F5C\u4E3A\u65B9\u6CD5\u7684\u53C2\u6570\u4F20\u9012\u65F6\uFF0C\u5B9E\u9645\u4E0A\u4F20\u9012\u7684\u662F\u6570\u7EC4\u7684\u5F15\u7528\u3002\u867D\u7136\u5F62\u53C2\u548C\u5B9E\u53C2\u90FD\u6307\u5411\u540C\u4E00\u4E2A\u6570\u7EC4\u5BF9\u8C61\uFF0C\u4F46\u5F62\u53C2\u548C\u5B9E\u53C2\u5E76\u4E0D\u662F\u540C\u4E00\u4E2A\u53D8\u91CF\u3002"}),"\n",(0,a.jsx)(r.p,{children:"\u4E0B\u9762\u7684\u793A\u4F8B\u6F14\u793A\u4E86\u8FD9\u4E00\u70B9\uFF1A"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-java",children:"import java.util.Arrays;\n\npublic class ArrayParameterExample {\n    public static void main(String[] args) {\n        int[] originalArray = {1, 2, 3, 4, 5};\n        int[] modifiedArray = doubleArrayValues(originalArray);\n\n        // \u539F\u6570\u7EC4\u548C\u4FEE\u6539\u540E\u7684\u6570\u7EC4\u662F\u540C\u4E00\u4E2A\u5F15\u7528\n        System.out.println(originalArray == modifiedArray); // true\n        System.out.println(Arrays.toString(originalArray)); // [2, 4, 6, 8, 10]\n        System.out.println(Arrays.toString(modifiedArray)); // [2, 4, 6, 8, 10]\n    }\n\n    public static int[] doubleArrayValues(int[] array) {\n        int length = array.length;\n        for (int i = 0; i < length; i++) {\n            array[i] *= 2;\n        }\n        return array;\n    }\n}\n"})}),"\n",(0,a.jsx)(r.h3,{id:"\u5F62\u53C2\u662F\u4EC0\u4E48",children:"\u5F62\u53C2\u662F\u4EC0\u4E48"}),"\n",(0,a.jsxs)(r.p,{children:["\u5728\u4E0A\u8FF0\u793A\u4F8B\u4E2D\uFF0C\u65B9\u6CD5 ",(0,a.jsx)(r.code,{children:"doubleArrayValues"})," \u7684\u5F62\u53C2 ",(0,a.jsx)(r.code,{children:"array"})," \u662F\u65B9\u6CD5\u5185\u90E8\u7684\u4E00\u4E2A\u5C40\u90E8\u53D8\u91CF\uFF0C\u5B83\u5B58\u50A8\u4E86\u4F20\u5165\u6570\u7EC4\u7684\u5F15\u7528\u3002\u5BF9\u5F62\u53C2 ",(0,a.jsx)(r.code,{children:"array"})," \u7684\u4FEE\u6539\u4F1A\u5F71\u54CD\u5230\u539F\u6570\u7EC4\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u6307\u5411\u540C\u4E00\u4E2A\u6570\u7EC4\u5BF9\u8C61\u3002"]}),"\n",(0,a.jsx)(r.h3,{id:"\u5F15\u7528\u5207\u65AD",children:"\u5F15\u7528\u5207\u65AD"}),"\n",(0,a.jsx)(r.p,{children:"\u5F53\u4E00\u4E2A\u5BF9\u8C61\u4E0D\u518D\u6709\u4EFB\u4F55\u5F15\u7528\u6307\u5411\u5B83\u65F6\uFF0CJava \u7684\u5783\u573E\u56DE\u6536\u673A\u5236\u4F1A\u56DE\u6536\u8FD9\u5757\u5185\u5B58\u7A7A\u95F4\u3002"}),"\n",(0,a.jsx)(r.h2,{id:"\u4E8C\u7EF4\u6570\u7EC4",children:"\u4E8C\u7EF4\u6570\u7EC4"}),"\n",(0,a.jsx)(r.p,{children:"\u4EE5\u4E0B\u793A\u4F8B\u5C55\u793A\u4E86\u5982\u4F55\u904D\u5386\u4E8C\u7EF4\u6570\u7EC4\uFF1A"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-java",children:'public class TwoDimensionalArrayExample {\n    public static void main(String[] args) {\n        int[][] matrix = {\n            {1, 2, 3},\n            {3, 4, 5},\n            {4, 5, 6}\n        };\n        for (int i = 0; i < matrix.length; i++) {\n            for (int j = 0; j < matrix[i].length; j++) {\n                System.out.print(matrix[i][j] + " ");\n            }\n            System.out.println();\n        }\n    }\n}\n'})}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{alt:"\u4E8C\u7EF4\u6570\u7EC4\u793A\u610F\u56FE",src:e(21027).Z+"",width:"992",height:"598"})}),"\n",(0,a.jsx)(r.h2,{id:"\u6768\u8F89\u4E09\u89D2",children:"\u6768\u8F89\u4E09\u89D2"}),"\n",(0,a.jsx)(r.p,{children:"\u4EE5\u4E0B\u4EE3\u7801\u751F\u6210\u5E76\u6253\u5370\u6768\u8F89\u4E09\u89D2\uFF1A"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-java",children:'import java.util.Scanner;\n\npublic class PascalTriangle {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        System.out.print("\u8BF7\u8F93\u5165\u884C\u6570");\n        int rowCount = scanner.nextInt();\n        int[][] triangle = new int[rowCount][];\n\n        for (int i = 0; i < rowCount; i++) {\n            triangle[i] = new int[i + 1];\n            triangle[i][0] = 1;\n            triangle[i][i] = 1;\n\n            for (int j = 1; j < i; j++) {\n                triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];\n            }\n        }\n\n        for (int i = 0; i < rowCount; i++) {\n            for (int k = 0; k < (rowCount - i - 1) * 2; k++) {\n                System.out.print(" ");\n            }\n            for (int j = 0; j <= i; j++) {\n                System.out.print(triangle[i][j] + "  ");\n            }\n            System.out.println();\n        }\n    }\n}\n'})}),"\n",(0,a.jsx)(r.h2,{id:"\u6570\u7EC4\u67E5\u8BE2",children:"\u6570\u7EC4\u67E5\u8BE2"}),"\n",(0,a.jsx)(r.p,{children:"\u4E0B\u9762\u7684\u7A0B\u5E8F\u5B9E\u73B0\u4E86\u4EE5\u4E0B\u529F\u80FD\uFF1A"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"\u8F93\u5165\u5143\u7D20\u4E2A\u6570"}),"\n",(0,a.jsx)(r.li,{children:"\u8F93\u5165\u968F\u673A\u6570\u8303\u56F4"}),"\n",(0,a.jsx)(r.li,{children:"\u8F93\u5165\u731C\u6D4B\u7684\u6570\u5B57"}),"\n",(0,a.jsx)(r.li,{children:"\u8F93\u51FA\u5F53\u524D\u6570\u7EC4\u7684\u6700\u5927\u503C\u548C\u6700\u5C0F\u503C"}),"\n"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-java",children:'import java.util.Arrays;\nimport java.util.Random;\nimport java.util.Scanner;\n\npublic class ArraySearchExample {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        System.out.print("\u8BF7\u8F93\u5165\u6570\u5B57\u7684\u4E2A\u6570");\n        int elementCount = scanner.nextInt();\n        System.out.print("\u8BF7\u8F93\u5165\u6700\u5927\u968F\u673A\u6570");\n        int maxRandomValue = scanner.nextInt();\n        System.out.print("\u8BF7\u8F93\u5165\u731C\u6D4B\u7684\u6570\u5B57");\n        int guessedNumber = scanner.nextInt();\n\n        int[] numbers = generateRandomArray(elementCount, maxRandomValue);\n\n        System.out.println("\u751F\u6210\u7684\u6570\u7EC4\uFF1A" + Arrays.toString(numbers));\n\n        boolean isFound = containsNumber(numbers, guessedNumber);\n        if (isFound) {\n            System.out.println("\u6570\u5B57" + guessedNumber + "\u5B58\u5728");\n        } else {\n            System.out.println("\u6570\u5B57" + guessedNumber + "\u4E0D\u5B58\u5728");\n        }\n\n        int maximumValue = findExtremeValue(numbers, "MAX");\n        System.out.println("\u6700\u5927\u503C\uFF1A" + maximumValue);\n        int minimumValue = findExtremeValue(numbers, "MIN");\n        System.out.println("\u6700\u5C0F\u503C\uFF1A" + minimumValue);\n    }\n\n    public static int[] generateRandomArray(int size, int maxValue) {\n        int[] array = new int[size];\n        Random random = new Random();\n        for (int i = 0; i < size; i++) {\n            array[i] = random.nextInt(maxValue);\n        }\n        return array;\n    }\n\n    public static boolean containsNumber(int[] array, int number) {\n        for (int element : array) {\n            if (element == number) {\n                return true;\n            }\n        }\n        return false;\n    }\n\n    public static int findExtremeValue(int[] array, String type) {\n        int extremeValue = array[0];\n\n        for (int i = 1; i < array.length; i++) {\n            switch (type) {\n                case "MAX":\n                    if (array[i] > extremeValue) {\n                        extremeValue = array[i];\n                    }\n                    break;\n                case "MIN":\n                    if (array[i] < extremeValue) {\n                        extremeValue = array[i];\n                    }\n                    break;\n                default:\n                    break;\n            }\n        }\n        return extremeValue;\n    }\n}\n'})}),"\n",(0,a.jsx)(r.h2,{id:"\u6570\u7EC4\u6392\u5E8F",children:"\u6570\u7EC4\u6392\u5E8F"}),"\n",(0,a.jsx)(r.h3,{id:"\u5192\u6CE1\u6392\u5E8F",children:"\u5192\u6CE1\u6392\u5E8F"}),"\n",(0,a.jsx)(r.p,{children:"\u4EE5\u4E0B\u662F\u5192\u6CE1\u6392\u5E8F\u7684\u5B9E\u73B0\uFF1A"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-java",children:"public static int[] bubbleSort(int[] array) {\n    int[] sortedArray = Arrays.copyOf(array, array.length);\n    int length = sortedArray.length;\n    int temp;\n\n    for (int j = length - 1; j > 0; j--) {\n        for (int i = 0; i < j; i++) {\n            if (sortedArray[i] > sortedArray[i + 1]) {\n                temp = sortedArray[i];\n                sortedArray[i] = sortedArray[i + 1];\n                sortedArray[i + 1] = temp;\n            }\n        }\n    }\n    return sortedArray;\n}\n"})}),"\n",(0,a.jsx)(r.h3,{id:"\u9009\u62E9\u6392\u5E8F",children:"\u9009\u62E9\u6392\u5E8F"}),"\n",(0,a.jsx)(r.p,{children:"\u9009\u62E9\u6392\u5E8F\u6BD4\u5192\u6CE1\u6392\u5E8F\u6548\u7387\u66F4\u9AD8\uFF0C\u56E0\u4E3A\u4EA4\u6362\u6B21\u6570\u66F4\u5C11\u3002"}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsx)(r.li,{children:"\u4ECE\u6570\u7EC4\u7B2C\u4E00\u4E2A\u5143\u7D20\u5F00\u59CB\uFF0C\u9010\u4E00\u5BF9\u6BD4\uFF0C\u8BB0\u5F55\u6700\u5C0F\u503C\u7684\u4E0B\u6807\u3002"}),"\n",(0,a.jsx)(r.li,{children:"\u4E00\u8F6E\u7ED3\u675F\u540E\uFF0C\u5C06\u6700\u5C0F\u503C\u4E0E\u5F53\u524D\u8F6E\u7684\u8D77\u59CB\u5143\u7D20\u4EA4\u6362\u3002"}),"\n",(0,a.jsx)(r.li,{children:"\u91CD\u590D\u4EE5\u4E0A\u6B65\u9AA4\uFF0C\u76F4\u5230\u6392\u5E8F\u5B8C\u6210\u3002"}),"\n"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-java",children:"import java.util.Arrays;\n\npublic class SelectionSortExample {\n    public static void main(String[] args) {\n        int[] array = {2, 5, 7, 4, 7, 1, 0, 2};\n\n        int[] sortedArray = selectionSort(array);\n        System.out.println(Arrays.toString(sortedArray));\n    }\n\n    public static int[] selectionSort(int[] array) {\n        int[] sortedArray = Arrays.copyOf(array, array.length);\n        int minIndex;\n\n        for (int i = 0; i < sortedArray.length - 1; i++) {\n            minIndex = i;\n            for (int j = i + 1; j < sortedArray.length; j++) {\n                if (sortedArray[minIndex] > sortedArray[j]) {\n                    minIndex = j;\n                }\n            }\n            if (minIndex != i) {\n                int temp = sortedArray[i];\n                sortedArray[i] = sortedArray[minIndex];\n                sortedArray[minIndex] = temp;\n            }\n        }\n        return sortedArray;\n    }\n}\n"})}),"\n",(0,a.jsx)(r.h3,{id:"\u76F4\u63A5\u63D2\u5165\u6392\u5E8F",children:"\u76F4\u63A5\u63D2\u5165\u6392\u5E8F"}),"\n",(0,a.jsx)(r.p,{children:"\u4EE5\u4E0B\u662F\u76F4\u63A5\u63D2\u5165\u6392\u5E8F\u7684\u5B9E\u73B0\uFF1A"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-java",children:"import java.util.Arrays;\n\npublic class InsertionSortExample {\n    public static void main(String[] args) {\n        int[] array = {4, 2, 6, 3, 1, 5};\n\n        int[] sortedArray = insertionSort(array);\n        System.out.println(Arrays.toString(sortedArray));\n    }\n\n    public static int[] insertionSort(int[] array) {\n        int[] sortedArray = Arrays.copyOf(array, array.length);\n\n        for (int i = 1; i < sortedArray.length; i++) {\n            int current = sortedArray[i];\n            int j = i - 1;\n            while (j >= 0 && sortedArray[j] > current) {\n                sortedArray[j + 1] = sortedArray[j];\n                j--;\n            }\n            sortedArray[j + 1] = current;\n        }\n        return sortedArray;\n    }\n}\n"})}),"\n",(0,a.jsx)(r.h2,{id:"\u4E8C\u5206\u67E5\u627E",children:"\u4E8C\u5206\u67E5\u627E"}),"\n",(0,a.jsx)(r.p,{children:"\u4E8C\u5206\u67E5\u627E\u7684\u524D\u63D0\u662F\u6570\u7EC4\u5FC5\u987B\u662F\u6709\u5E8F\u7684\uFF0C\u6548\u7387\u6BD4\u8F83\u9AD8\u3002"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-java",children:"public static int binarySearch(int[] sortedArray, int key) {\n    int low = 0;\n    int high = sortedArray.length - 1;\n\n    while (low <= high) {\n        int mid = (low + high) >>> 1; // \u9632\u6B62\u6EA2\u51FA\n        int midVal = sortedArray[mid];\n\n        if (midVal < key) {\n            low = mid + 1;\n        } else if (midVal > key) {\n            high = mid - 1;\n        } else {\n            return mid; // \u627E\u5230\u5173\u952E\u5B57\uFF0C\u8FD4\u56DE\u7D22\u5F15\n        }\n    }\n    return -1; // \u672A\u627E\u5230\u5173\u952E\u5B57\n}\n"})}),"\n",(0,a.jsx)(r.h2,{id:"arrays-\u5DE5\u5177\u7C7B",children:"Arrays \u5DE5\u5177\u7C7B"}),"\n",(0,a.jsxs)(r.p,{children:["Java \u63D0\u4F9B\u4E86 ",(0,a.jsx)(r.code,{children:"Arrays"})," \u5DE5\u5177\u7C7B\uFF0C\u5305\u542B\u4E86\u5404\u79CD\u64CD\u4F5C\u6570\u7EC4\u7684\u65B9\u6CD5\u3002"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-java",children:'import java.util.Arrays;\n\npublic class ArrayToolsExample {\n    public static void main(String[] args) {\n        int[] array = {4, 2, 6, 3, 1, 5};\n\n        // \u6392\u5E8F\u6570\u7EC4\n        Arrays.sort(array);\n        System.out.println(Arrays.toString(array)); // [1, 2, 3, 4, 5, 6]\n\n        // \u4E8C\u5206\u67E5\u627E\n        int index = Arrays.binarySearch(array, 2);\n        System.out.println("\u6570\u5B57 2 \u7684\u7D22\u5F15\uFF1A" + index); // \u6570\u5B57 2 \u7684\u7D22\u5F15\uFF1A1\n    }\n}\n'})}),"\n",(0,a.jsx)(r.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["\u8FDB\u884C\u6570\u7EC4\u64CD\u4F5C\u65F6\uFF0C\u8981\u6CE8\u610F\u7D22\u5F15\u8303\u56F4\uFF0C\u9632\u6B62 ",(0,a.jsx)(r.code,{children:"ArrayIndexOutOfBoundsException"})," \u5F02\u5E38\u3002"]}),"\n",(0,a.jsxs)(r.li,{children:["\u5BF9\u4E8E\u9700\u8981\u5927\u91CF\u63D2\u5165\u548C\u5220\u9664\u64CD\u4F5C\u7684\u573A\u666F\uFF0C\u6570\u7EC4\u53EF\u80FD\u4E0D\u662F\u6700\u4F73\u9009\u62E9\uFF0C\u53EF\u4EE5\u8003\u8651\u4F7F\u7528 ",(0,a.jsx)(r.code,{children:"ArrayList"})," \u7B49\u96C6\u5408\u7C7B\u3002"]}),"\n"]})]})}function u(n={}){let{wrapper:r}={...(0,t.a)(),...n.components};return r?(0,a.jsx)(r,{...n,children:(0,a.jsx)(c,{...n})}):c(n)}},21027:function(n,r,e){e.d(r,{Z:function(){return i}});let i=e.p+"assets/images/463b979d2be6d95b854ebd297ad11982-5db97b873ddfeb859f1d52d5cb3fc5e7.jpeg"},50065:function(n,r,e){e.d(r,{Z:function(){return s},a:function(){return l}});var i=e(67294);let a={},t=i.createContext(a);function l(n){let r=i.useContext(t);return i.useMemo(function(){return"function"==typeof n?n(r):{...r,...n}},[r,n])}function s(n){let r;return r=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:l(n.components),i.createElement(t.Provider,{value:r},n.children)}}}]);