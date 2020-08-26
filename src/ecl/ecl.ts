/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

import IRichLanguageConfiguration = monaco.languages.LanguageConfiguration;
import ILanguage = monaco.languages.IMonarchLanguage;

export const conf: IRichLanguageConfiguration = {
	comments: {
		lineComment: '//',
		blockComment: ['/*', '*/'],
	},
	brackets: [
		['{', '}'],
		['[', ']'],
		['(', ')']
	],
	autoClosingPairs: [
		{ open: '[', close: ']' },
		{ open: '{', close: '}' },
		{ open: '(', close: ')' },
		{ open: '\'', close: '\'', notIn: ['string', 'comment'] },
		{ open: '"', close: '"', notIn: ['string'] },
	],
	surroundingPairs: [
		{ open: '{', close: '}' },
		{ open: '[', close: ']' },
		{ open: '(', close: ')' },
		{ open: '"', close: '"' },
		{ open: '\'', close: '\'' },
	],
	folding: {
		markers: {
			start: new RegExp("^\\s*#pragma\\s+region\\b"),
			end: new RegExp("^\\s*#pragma\\s+endregion\\b")
		}
	}
};

export const language = <ILanguage>{
	defaultToken: '',
	tokenPostfix: '.ecl',
	ignoreCase: true,

	brackets: [
		{ open: '{', close: '}', token: 'delimiter.curly' },
		{ open: '[', close: ']', token: 'delimiter.square' },
		{ open: '(', close: ')', token: 'delimiter.parenthesis' },
		{ open: '<', close: '>', token: 'delimiter.angle' }
	],

	pounds: [
		'append', 'break', 'declare', 'demangle', 'end', 'for', 'getdatatype', 'if', 'inmodule',
		'loop', 'mangle', 'onwarning', 'option', 'set', 'stored', 'uniquename'
	].join('|'),

	keywords: [
		'__compressed__', 'after', 'all', 'and', 'any', 'as', 'atmost', 'before', 'beginc',
		'best', 'between', 'case', 'cluster', 'compressed', 'compression', 'const', 'counter',
		'csv', 'default', 'descend', 'embed', 'encoding', 'encrypt', 'end', 'endc', 'endembed',
		'endmacro', 'enum', 'escape', 'except', 'exclusive', 'expire', 'export', 'extend',
		'fail', 'few', 'fileposition', 'first', 'flat', 'forward', 'from', 'full', 'function',
		'functionmacro', 'group', 'grouped', 'heading', 'hole', 'ifblock', 'import', 'in',
		'inner', 'interface', 'internal', 'joined', 'keep', 'keyed', 'last', 'left', 'limit',
		'linkcounted', 'literal', 'little_endian', 'load', 'local', 'locale', 'lookup',
		'lzw', 'macro', 'many', 'maxcount', 'maxlength', 'min skew', 'module', 'mofn',
		'multiple', 'named', 'namespace', 'nocase', 'noroot', 'noscan', 'nosort', 'not',
		'noxpath', 'of', 'onfail', 'only', 'opt', 'or', 'outer', 'overwrite', 'packed',
		'partition', 'penalty', 'physicallength', 'pipe', 'prefetch', 'quote', 'record',
		'repeat', 'retry', 'return', 'right', 'right1', 'right2', 'rows', 'rowset', 'scan',
		'scope', 'self', 'separator', 'service', 'shared', 'skew', 'skip', 'smart', 'soapaction',
		'sql', 'stable', 'store', 'terminator', 'thor', 'threshold', 'timelimit', 'timeout',
		'token', 'transform', 'trim', 'type', 'unicodeorder', 'unordered', 'unsorted',
		'unstable', 'update', 'use', 'validate', 'virtual', 'whole', 'width', 'wild', 'within',
		'wnotrim', 'xml', 'xpath'
	],

	functions: [
		'abs', 'acos', 'aggregate', 'allnodes', 'apply', 'apply', 'ascii', 'asin', 'assert',
		'asstring', 'atan', 'atan2', 'ave', 'build', 'buildindex', 'case', 'catch', 'choose',
		'choosen', 'choosesets', 'clustersize', 'combine', 'correlation', 'cos', 'cosh',
		'count', 'covariance', 'cron', 'dataset', 'dedup', 'define', 'denormalize', 'dictionary',
		'distribute', 'distributed', 'distribution', 'ebcdic', 'enth', 'error', 'evaluate',
		'evaluate', 'event', 'eventextra', 'eventname', 'exists', 'exp', 'fail', 'failcode',
		'failmessage', 'fetch', 'fromunicode', 'fromxml', 'getenv', 'getisvalid', 'global',
		'graph', 'group', 'hash', 'hash32', 'hash64', 'hashcrc', 'hashmd5', 'having', 'httpcall',
		'httpheader', 'if', 'iff', 'index', 'intformat', 'isvalid', 'iterate', 'join',
		'keydiff', 'keypatch', 'keyunicode', 'length', 'library', 'limit', 'ln', 'loadxml',
		'local', 'log', 'loop', 'map', 'matched', 'matchlength', 'matchposition', 'matchtext',
		'matchunicode', 'max', 'merge', 'mergejoin', 'min', 'nofold', 'nolocal', 'nonempty',
		'normalize', 'nothor', 'notify', 'output', 'parallel', 'parse', 'pipe', 'power',
		'preload', 'process', 'project', 'pull', 'random', 'range', 'rank', 'ranked', 'realformat',
		'recordof', 'regexfind', 'regexreplace', 'regroup', 'rejected', 'rollup', 'round',
		'roundup', 'row', 'rowdiff', 'sample', 'sequential', 'set', 'sin', 'sinh', 'sizeof',
		'soapcall', 'soapcall', 'sort', 'sorted', 'sqrt', 'stepped', 'stored', 'sum', 'table',
		'tan', 'tanh', 'thisnode', 'topn', 'tounicode', 'toxml', 'transfer', 'transform',
		'trim', 'truncate', 'typeof', 'ungroup', 'unicodeorder', 'variance', 'wait', 'which',
		'workunit', 'xmldecode', 'xmlencode', 'xmltext', 'xmlunicode'
	].join('|'),

	typesnum: [
		'data', 'qstring', 'string', 'unicode', 'utf8', 'varstring', 'varunicode'
	].join('|'),

	typesone: [
		'ascii', 'big_endian', 'boolean', 'data', 'decimal', 'ebcdic', 'grouped', 'integer',
		'linkcounted', 'pattern', 'qstring', 'real', 'record', 'rule', 'set of', 'streamed',
		'string', 'token', 'udecimal', 'unicode', 'unsigned', 'utf8', 'varstring', 'varunicode'
	].join('|'),

	symbols: /[=><!~?:&|+\-*\/\^%]+/,

	// escape sequences
	escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,

	operators: [
		'+', '-', '/', ':=', '<', '<>', '=', '>', '\\', 'and', 'in', 'not', 'or'
	],

	tokenizer: {

		root: [
			[/#@pounds\b/, "keyword"],
			[/\b@functions\s*\(/, "keyword"],
			[/\b@typesnum\d+\b/, "type"],
			[/\b(integer|unsigned)[1-8]*\b/, "type"],
			[/\breal(4|8)\b/, "type"],
			[/\b(u?)decimal\d+(_\d+)?\b/, "type"],

			// identifiers and keywords
			[/\b[a-zA-Z_]\w*\b/, {
				cases: {
					'@keywords': { token: 'keyword.$0' },
					'@default': 'identifier'
				}
			}],

			// whitespace
			{ include: '@whitespace' },

			[/[{}()\[\]]/, '@brackets'],
			[/[<>](?!@symbols)/, '@brackets'],
			[/@symbols/, {
				cases: {
					'@operators': 'delimiter',
					'@default': 'not good'
				}
			}],

			// numbers
			[/[0-9_]*\.[0-9_]+([eE][\-+]?\d+)?/, 'number.float'],
			[/0[xX][0-9a-fA-F_]+/, 'number.hex'],
			[/0[bB][01]+/, 'number.hex'], // binary: use same theme style as hex
			[/[0-9_]+/, 'number'],

			// delimiter: after number because of .\d floats
			[/[;,.]/, 'delimiter'],

			// strings
			[/'([^'\\]|\\.)*$/, 'string.invalid'],  // non-teminated string
			[/'/, { token: 'string.quote', next: '@string' }],

			// characters
			[/'[^\\']'/, 'string'],
			[/(')(@escapes)(')/, ['string', 'string.escape', 'string']],
			[/'/, 'string.invalid']
		],

		comment: [
			[/[^\/*]+/, 'comment'],
			[/\*\//, 'comment', '@pop'],
			[/[\/*]/, 'comment']
		],

		string: [
			[/[^\\']+/, 'string'],
			[/@escapes/, 'string.escape'],
			[/\\./, 'string.escape.invalid'],
			[/'/, 'string', '@pop']
		],

		whitespace: [
			[/[ \t\v\f\r\n]+/, ''],
			[/\/\*/, 'comment', '@comment'],
			[/\/\/.*$/, 'comment'],
		]
	}
};
